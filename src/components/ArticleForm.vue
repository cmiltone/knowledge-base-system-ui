<template>
  <div>
    <h1 class="mx-auto my-6 text-center" style="max-width: 500px;">
      Create Article
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
            <i style="margin: 0 5px" @click="addCategory">Add Category</i>
          </template>
        </v-autocomplete>

        <v-checkbox
          v-model="publish"
          label="Publish"
        />

        <v-file-input
          v-model="images"
          chips
          label="Images and/or Videos(optional, max: 4)"
          placeholder="Select Images"
          multiple
          variant="outlined"
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

const {
  mapActions: articleActions,
} = createNamespacedHelpers('CREATE_ARTICLE');

const {
  mapGetters: categoryGetters,
  mapActions: categoryActions,
} = createNamespacedHelpers('CATEGORY');

export default {
  name: 'ArticleForm',
  data: () => ({
    valid: false,
    title: '',
    content: '',
    category: '',
    publish: false,
    loadingCategories: false,
    images: [] as File[],
    //videos: [] as File[],
  }),
  computed: {
    ...categoryGetters(['categoryPage']),
    user() {
      return this.$store.getters.user;
    }
  },
  created() {
    this.fetchCategories()
  },
  methods: {
    ...articleActions(['createArticle']),
    ...categoryActions(['fetchCategoryList']),
    getRules(field: string) {
      return [
        (v: string) => !!v || `${field} is required`
      ]
    },
    save() {
      if (!this.valid) return;

      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('category', this.category);
      formData.append('creator', this.user._id);
      formData.append('status', this.publish ? 'published' : 'draft');

      this.images.forEach((image) => formData.append("files", image));

      // this.videos.forEach((video) => formData.append("files", video));

      this.createArticle(formData).then((data) => {
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
      if (q) this.fetchCategories(`&q=${q}`)
    },
    addCategory() {}
  },
  beforeCreate() {
      if (!this.$store.hasModule('CREATE_ARTICLE')) {
        this.$store.registerModule('CREATE_ARTICLE', articleStoreModule)
      }
      if (!this.$store.hasModule('CATEGORY')) {
        this.$store.registerModule('CATEGORY', categoryStoreModule);
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('CREATE_ARTICLE');
    this.$store.unregisterModule('CATEGORY');
  }
}
</script>
