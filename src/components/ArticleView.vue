<template>
  <div v-if="article">
    <h1 class="ma-6">
      <router-link to="/article">Articles</router-link> <v-icon icon="mdi-chevron-right" /> {{ article.title }}
    </h1>
    <v-card
      :loading="loading"
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="900"
      rounded="lg"
    >
      <template v-slot:loader="{ isActive }">
        <v-progress-linear
          :active="isActive"
          color="deep-purple"
          height="4"
          indeterminate
        />
      </template>
      <v-card-title>Category: <router-link :to="`/article?categoryId=${article.category?._id}`">{{ article.category?.name }}</router-link></v-card-title>

      <v-card-text>
        <p class="mt-4">{{ article.content }}</p>
      </v-card-text>

      <div
        v-for="media in article.media"
        :key="media.filename"
        class="text-center"
      >
        <v-img
          v-if="media.type === 'image'"
          :src="`${fileBaseUrl}/${media.filename}`"
          height="250px"
        />
        <video
          v-else
          :src="`${fileBaseUrl}/${media.filename}`"
          style="max-height: 400px;"
          controls
        ></video>
      </div>

      <v-card-actions class="text-right">
        <p>Posted by: {{ article.creator?.fullName }}, {{ readableDate(article.createdAt, 'MMM Do, YYYY h:mmA') }}</p>
        <v-btn
          v-if="article.creator?._id === user._id || user.role === 'admin'"
          class="mx-4"
          variant="tonal"
          :to="`/article/edit/${article._id}`"
          color="blue"
        >
          <v-icon icon="mdi-pencil"></v-icon> Edit
        </v-btn>
      </v-card-actions>
      
    </v-card>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import articleStoreModule from '@/store/modules/article';
import { readableDate } from '@/util/filters';

const BASE_URL = import.meta.env.VITE_API_URL;

const {
  mapActions: articleActions,
} = createNamespacedHelpers('ARTICLE');

export default {
  name: 'ArticleView',
  data: () => ({
    loading: false,
    fileBaseUrl: `${BASE_URL}/v1/file`
  }),
  props: {
    articleId: {
      type: String,
      required: true,
    }
  },
  computed: {
    article() {
      return this.$store.getters['ARTICLE/getArticle'](this.articleId)
    },
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.loading = true;
    this.fetchArticle(`?articleId=${this.articleId}`).then((data) => {
      if (data) this.loading = false;
    })
  },
  methods: {
    ...articleActions(['createArticle', 'fetchArticle']),
    getRules(field: string) {
      return [
        (v: string) => !!v || `${field} is required`
      ]
    },
    readableDate,
  },
  beforeCreate() {
      if (!this.$store.hasModule('ARTICLE')) {
        this.$store.registerModule('ARTICLE', articleStoreModule)
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('ARTICLE');
  }
}
</script>
