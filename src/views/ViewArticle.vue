<template>
  <article-view :articleId="articleId"/>
</template>

<script lang="ts">
import ArticleView from '@/components/ArticleView.vue'
export default {
  name: "ViewArticle",
  components: {
    ArticleView
  },
  props: {
    articleId: {
      type: String,
      required: true,
    }
  },
}
</script>
