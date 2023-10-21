<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        Articles
      </v-col>
      <v-col cols="8">
        <v-text-field placeholder="Search articles" prepend-icon="mdi-magnify" @keyup="searchArticle"/>
      </v-col>
      <v-col cols="2">
        <v-btn to="/article/new">
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
    <v-row justify="center">
      <v-col cols="8">
        <v-container class="max-width">
          <v-pagination
            v-model="page"
            class="my-4"
            :length="totalPages"
          ></v-pagination>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';
import { VDataTableServer } from 'vuetify/labs/VDataTable'

import { readableDate } from '@/util/filters';
import articleStoreModule from '@/store/modules/article';

const {
  mapGetters: articleGetters,
  mapActions: articleActions,
} = createNamespacedHelpers('ARTICLE_LIST');
export default {
  name: 'ArticleList',
  components: { VDataTableServer },
  data: () => ({
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
    loading: false
  }),
  created() {
    this.fetchArticles()
  },
  computed: {
    ...articleGetters(["articlePage"]),
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    ...articleActions(["fetchArticleList"]),
    readableDate,
    searchArticle(ev: InputEvent) {
      const q = (ev.target as HTMLInputElement).value;

      if (q) this.fetchArticles(`&q=${q}`)
    },
    fetchArticles(p = '') {
      this.loading = true;
      let params = `?limit=${this.limit}&page=${this.page}`;
      const status = this.user.role === 'user' ? '&status=published' : '';

      params += status;
      params += p;

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
    }
  },
  beforeCreate() {
      if (!this.$store.hasModule('ARTICLE_LIST')) {
        this.$store.registerModule('ARTICLE_LIST', articleStoreModule)
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('ARTICLE_LIST')
  }
}
</script>