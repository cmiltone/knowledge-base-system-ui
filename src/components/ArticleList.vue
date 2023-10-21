<template>
  <v-container>
    <v-row>
      <v-col cols="2">
        Articles
      </v-col>
      <v-col cols="8">
        <v-text-field placeholder="Search articles" prepend-icon="mdi-magnify"/>
      </v-col>
      <v-col cols="2">
        <v-btn to="/article">
          Create
        </v-btn>
      </v-col>
    </v-row>

    <v-table>
      <thead>
        <tr>
          <td>Title</td>
          <td>Category</td>
          <td>Created By</td>
          <td>Created On</td>
          <td>Action</td>
        </tr>
      </thead>

      <tbody>
        <tr v-for="article in articlePage.docs" :key="article._id">
          <td>{{ article.title }}</td>
          <td>{{ article.category?.name }}</td>
          <td>{{ article.creator?.fullName }}</td>
          <td>{{ readableDate(article.createdAt, "D/MM/YYYY HH:mm") }}</td>
          <td>
            <router-link :to="`/article/${article._id}`">View</router-link>
          </td>
        </tr>
      </tbody>
    </v-table>
  </v-container>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import { readableDate } from '@/util/filters';
import articleStoreModule from '@/store/modules/article';

const {
  mapGetters: articleGetters,
  mapActions: articleActions,
} = createNamespacedHelpers('ARTICLE_LIST');
export default {
  name: 'ArticleList',
  data: () => ({
    //
  }),
  created() {
    this.fetchArticleList()
  },
  computed: {
    ...articleGetters(["articlePage"]),
  },
  methods: {
    ...articleActions(["fetchArticleList"]),
    readableDate,
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