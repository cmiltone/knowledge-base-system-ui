
import article from '@/store/modules/article';
<template>
  <article-edit-form :articleId="articleId" />
</template>

<script lang="ts">
import ArticleEditForm from '@/components/ArticleEditForm.vue'
export default {
  name: "EditArticle",
  components: {
    ArticleEditForm
  },
  props: {
    articleId: {
      type: String,
      required: true,
    }
  },
}
</script>
