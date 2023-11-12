<template>
  <v-main>
    <v-progress-linear v-if="loading" indeterminate />
    <router-view />
  </v-main>
</template>

<script lang="ts">
export default {
  name: "Auth",
  computed: {
    loading() {
      return this.$store.getters.loadingRequest;
    }
  }
}
</script>
