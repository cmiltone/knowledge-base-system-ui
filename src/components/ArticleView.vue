<template>
  <div v-if="article">
    <v-dialog
      v-model="mediaDialog"
      max-width="80%"
      max-height="80%"
    >
      <v-card v-if="media">
        <v-card-title>{{ media.title }}</v-card-title>
        <v-img
          v-if="media.type === 'image'"
          :src="`${fileBaseUrl}/${media.filename}`"
          height="600"
        />
        <video v-else height="600" controls :src="`${fileBaseUrl}/${media.filename}`"></video>

        
        <div class="text-right">
          <v-btn color="blue" @click="mediaDialog = false">Close</v-btn>
        </div>
      </v-card>
    </v-dialog>
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

      <v-row class="my-4">
        <v-col
          v-for="(media) in article.media"
          :key="media._id"
          cols="12"
          sm="4"
        >
          <v-card max-width="210">
          <v-card-text>
            <v-img v-if="media.type === 'image'" height="200" :src="`${fileBaseUrl}/${media.thumbnail}`" />
            <video v-else height="200" :src="`${fileBaseUrl}/${media.filename}`" controls></video>
          </v-card-text>
          <v-card-actions>
            <v-btn title="View Media" color="blue" @click="viewMedia(media)">
              <v-icon icon="mdi-arrow-expand-all"></v-icon>
            </v-btn>
          </v-card-actions>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-right">
        <p>Posted by: <b>{{ article.creator?.fullName }}</b>, {{ readableDate(article.createdAt, 'MMM Do, YYYY h:mmA') }}</p>
        <br>
        <v-btn
          v-if="article.creator?._id === user._id || user.role === 'admin'"
          class="mx-4"
          variant="tonal"
          :to="`/article/edit/${article._id}`"
          color="blue"
        >
          <v-icon icon="mdi-pencil"></v-icon> Edit
        </v-btn>
      </div>
      
    </v-card>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import articleStoreModule from '@/store/modules/article';
import { readableDate } from '@/util/filters';
import { Media } from "@/types/media";

const BASE_URL = import.meta.env.VITE_API_URL;

const {
  mapActions: articleActions,
} = createNamespacedHelpers('ARTICLE');

export default {
  name: 'ArticleView',
  data: () => ({
    loading: false,
    fileBaseUrl: `${BASE_URL}/v1/file`,
    media: undefined as undefined | Media,
    mediaDialog: false,
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
    viewMedia(media: Media) {
      this.media = media;
      this.mediaDialog = true;
    }
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
