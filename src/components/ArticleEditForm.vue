<template>
  <div v-if="article">
    <v-dialog
      v-model="categoryDialog"
      persistent
      max-width="300"
    >
      <category-form
        v-if="categoryDialog"
        @category-saved="categoryDialog = false"
      />
    </v-dialog>
    <h1 class="ma-6">
      <router-link to="/article">Articles</router-link> <v-icon icon="mdi-chevron-right" /> Edit <v-icon icon="mdi-chevron-right" /> {{ article.title }}
    </h1>
    <v-card
      class="mx-auto pa-12 pb-8"
      elevation="8"
      max-width="700"
      rounded="lg"
    >
      <v-form v-model="valid" @submit.prevent="save">
        <v-text-field
          v-model="title"
          label="Title"
          :rules="getRules('Title')"
          placeholder="Enter title"
          variant="outlined"
        />

        <v-textarea
          v-model="content"
          label="Content"
          :rules="getRules('Content')"
          density="compact"
          placeholder="Enter Content"
          variant="outlined"
        />

        <v-autocomplete
          v-model="category"
          label="Category"
          :rules="getRules('Category')"
          :items="categoryPage.docs"
          item-title="name"
          item-value="_id"
          placeholder="Select Category"
          variant="outlined"
          no-data-text="No category"
          :no-filter="true"
          :loading="loadingCategories"
          @update:search="searchCategories"
        >
          <template v-slot:no-data>
            <v-btn color="blue" variant="text" class="ma-2" @click="addCategory">Add Category</v-btn>
          </template>
        </v-autocomplete>

        <v-checkbox
          v-model="publish"
          label="Publish"
        />

        <v-row class="my-4">
          <v-col
            v-for="(media, i) in article.media"
            :key="media._id"
            cols="12"
            sm="4"
          >
           <v-card max-width="210">
            <v-card-title>Media #{{ i + 1 }}</v-card-title>
            <v-card-subtitle>Type: {{ media.type }}</v-card-subtitle>
            <v-card-text>
              <v-img v-if="media.type === 'image'" height="200" :src="`${fileBaseUrl}/${media.thumbnail}`" />
              <video v-else height="200" :src="`${fileBaseUrl}/${media.filename}`" controls></video>
            </v-card-text>
            <v-card-actions>
              <v-btn title="Delete Media" color="red" @click="removeMedia(media._id)">
                <v-icon icon="mdi-delete"></v-icon>
              </v-btn>
            </v-card-actions>
           </v-card>
          </v-col>
        </v-row>

        <v-file-input
          v-model="images"
          chips
          label="Images and/or Videos(optional, max: 4)"
          placeholder="Select Images"
          multiple
          variant="outlined"
          :hint="`Upload to overwrite ${article.media.length} media already uploaded`"
        />

        <!-- <v-file-input
          v-model="videos"
          chips
          label="Videos"
          placeholder="Select Videos"
          multiple
          variant="outlined"
          accept="video/*"
        /> -->

        <v-card-text class="text-right">
          <v-btn
            class="mx-3"
            color="blue"
            variant="tonal"
            type="submit"
          >
            Save
          </v-btn>

          <v-btn
            class="mx-4"
            variant="tonal"
            to="/article"
            type="button"
          >
            <v-icon icon="mdi-chevron-left"></v-icon> Back
          </v-btn>
        </v-card-text>
      </v-form>
    </v-card>
  </div>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import articleStoreModule from '@/store/modules/article';
import categoryStoreModule from '@/store/modules/category';
import CategoryForm from './CategoryForm.vue';

const {
  mapActions: articleActions,
} = createNamespacedHelpers('EDIT_ARTICLE');

const {
  mapGetters: categoryGetters,
  mapActions: categoryActions,
} = createNamespacedHelpers('EDIT_ARTICLE_CATEGORY');

const BASE_URL = import.meta.env.VITE_API_URL;

export default {
  name: 'ArticleEditForm',
  components: { CategoryForm },
  data: () => ({
    valid: false,
    fileBaseUrl: `${BASE_URL}/v1/file`,
    loading: false,
    title: '',
    content: '',
    category: '',
    publish: false,
    loadingCategories: false,
    images: [] as File[],
    //videos: [] as File[],
    deletedMedia: [] as string[],
    categoryDialog: false,
  }),
  props: {
    articleId: {
      type: String,
      required: true,
    }
  },
  computed: {
    ...categoryGetters(['categoryPage']),
    user() {
      return this.$store.getters.user;
    },
    article() {
      return this.$store.getters['EDIT_ARTICLE/getArticle'](this.articleId)
    },
  },
  created() {
    this.fetchCategories();
    this.loading = true;
    this.fetchArticle(`?articleId=${this.articleId}`).then((data) => {
      if (data) {
        this.loading = false;
        this.title = data.title;
        this.content = data.content;
        this.category = data.category?._id;
        this.publish = data.status === 'published';
      }
    })
  },
  methods: {
    ...articleActions(['updateArticle', 'fetchArticle']),
    ...categoryActions(['fetchCategoryList']),
    getRules(field: string) {
      return [
        (v: string) => !!v || `${field} is required`
      ]
    },
    save() {
      if (!this.valid) return;

      const formData = new FormData();
      formData.append('articleId', this.articleId);
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('category', this.category);
      formData.append('creator', this.user._id);
      formData.append('status', this.publish ? 'published' : 'draft');

      this.images.forEach((image) => formData.append("files", image));
      formData.append('deletedMedia', this.deletedMedia.join(','));

      // this.videos.forEach((video) => formData.append("files", video));

      this.updateArticle(formData).then((data) => {
        if (data) this.$router.push(`/article/${data._id}`)
      });
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
    addCategory() {
      this.categoryDialog = true;
    },
    removeMedia(id: string) {
      this.deletedMedia.push(id);
    }
  },
  beforeCreate() {
      if (!this.$store.hasModule('EDIT_ARTICLE')) {
        this.$store.registerModule('EDIT_ARTICLE', articleStoreModule)
      }
      if (!this.$store.hasModule('EDIT_ARTICLE_CATEGORY')) {
        this.$store.registerModule('EDIT_ARTICLE_CATEGORY', categoryStoreModule);
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('EDIT_ARTICLE');
    this.$store.unregisterModule('EDIT_ARTICLE_CATEGORY');
  }
}
</script>
