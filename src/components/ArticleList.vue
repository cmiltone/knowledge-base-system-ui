<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        <h1>Articles</h1>
      </v-col>
      <v-col cols="8" style="display: flex;">
        <v-text-field class="mx-2" placeholder="Search articles" prepend-icon="mdi-magnify" @keyup="searchArticle"/>
        <v-autocomplete
          v-model="categoryId"
          :items="categoryPage.docs"
          item-title="name"
          item-value="_id"
          placeholder="Filter by Category"
          no-data-text="No categories to display"
          class="mx-2"
          :no-filter="true"
          :loading="loadingCategories"
          @update:search="searchCategories"
        />
      </v-col>
      <v-col cols="2">
        <v-btn v-if="user.role === 'creator'" to="/article/new">
          Create
        </v-btn>
      </v-col>
    </v-row>

    <v-data-table-server
      v-model:page="page"
      fixed-header
      :headers="headers"
      :items="articlePage.docs"
      :items-per-page="limit"
      :items-length="articlePage.totalDocs"
      :loading="loading"
      loading-text="Fetching articles..."
      no-data-text="No articles to display"
      class="elevation-1"
      @update:options="setOptions"
    >
      <template v-slot:[`item.createdAt`]="{ item }">
        {{ readableDate(item.createdAt, 'MMM Do, YYYY h:mmA') }}
      </template>
      <template v-slot:[`item.status`]="{ item }">
        <span class="text-capitalize">{{ item.status }}</span>
      </template>
      <template v-slot:[`item.action`]="{ item }">
        <v-btn size="x-small" color="primary" :to="`/article/${item._id}`">View</v-btn>
        <!-- <v-btn size="x-small" color="red" icon="mdi-delete-alert" title="Delete User" @click="delUserDialog = true; user = item.value" /> -->
      </template>
    </v-data-table-server>
  </v-container>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { readableDate } from '@/util/filters';
import articleStoreModule from '@/store/modules/article';
import categoryStoreModule from '@/store/modules/category';

const {
  mapGetters: articleGetters,
  mapActions: articleActions,
} = createNamespacedHelpers('ARTICLE_LIST');

const {
  mapGetters: categoryGetters,
  mapActions: categoryActions,
} = createNamespacedHelpers('LIST_ARTICLE_CATEGORY');
export default {
  name: 'ArticleList',
  components: { VDataTableServer },
  data: () => ({
    loadingCategories: false,
    headers: [
      {
        key: 'title',
        title: 'Title',
        sortable: true,
      },
      {
        key: 'category.name',
        title: 'Category',
      },
      {
        key: 'creator.fullName',
        title: 'Created By',
      },
      {
        key: 'createdAt',
        title: 'Created On',
      },
      {
        key: 'status',
        title: 'Status',
      },
      {
        key: 'action',
        title: 'Action',
      },
    ],
    limit: 10,
    hasPrevPage: false,
    hasNextPage: false,
    page: 1,
    totalPages: 0,
    loading: false,
    categoryId: ''
  }),
  created() {
    if (this.$route.query.categoryId) {
      this.categoryId = this.$route.query.categoryId as string;
    } else this.fetchArticles();
    this.fetchCategories();
  },
  computed: {
    ...articleGetters(["articlePage"]),
    ...categoryGetters(['categoryPage']),
    user() {
      return this.$store.getters.user;
    },
  },
  watch: {
    categoryId: 'searchByCategory'
  },
  methods: {
    ...articleActions(["fetchArticleList"]),
    ...categoryActions(['fetchCategoryList']),
    readableDate,
    searchArticle(ev: InputEvent) {
      const q = (ev.target as HTMLInputElement).value;

      if (q) this.fetchArticles(`&q=${q}`);
      else this.fetchArticles();
    },
    fetchArticles(p = '') {
      this.loading = true;
      let params = `?limit=${this.limit}&page=${this.page}`;
      const status = this.user.role === 'user' ? '&status=published' : '';
      const userId = this.user.role === 'creator' ? `&userId=${this.user._id}` : '';

      params += status;
      params += p;
      params += userId;

      this.fetchArticleList(params).then((data) => {
        if (data) {
          this.page = data.page;
          this.limit = data.limit;
          this.loading = false;
        }
      });
    },
    setOptions(opts: { page: number; itemsPerPage: number; }) {
      this.page = opts.page;
      this.limit = opts.itemsPerPage;
      this.fetchArticles();
    },
    fetchCategories(p = '') {
      this.loadingCategories = true;
      let params = `?status=active&limit=1000`;

      if (p) {
        params += p;
      }
      this.fetchCategoryList(params).then((data) => {
        if (data) this.loadingCategories = false;
      })
    },
    searchCategories(q: string) {
      if (q) this.fetchCategories(`&q=${q}`);
      else this.fetchCategories()
    },
    searchByCategory() {
      if (this.categoryId) this.fetchArticles(`&categoryId=${this.categoryId}`);
    }
  },
  beforeCreate() {
      if (!this.$store.hasModule('ARTICLE_LIST')) {
        this.$store.registerModule('ARTICLE_LIST', articleStoreModule)
      }
      if (!this.$store.hasModule('LIST_ARTICLE_CATEGORY')) {
        this.$store.registerModule('LIST_ARTICLE_CATEGORY', categoryStoreModule);
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('ARTICLE_LIST')
    this.$store.unregisterModule('LIST_ARTICLE_CATEGORY');
  }
}
</script>