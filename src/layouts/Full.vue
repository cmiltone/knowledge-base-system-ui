<template>
  <v-app-bar :elevation="2" title="Agriculture Knowledge Base System" rounded>
    <template v-slot:append>
      <v-btn icon="mdi-logout" @click="logout" title="Logout"></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer>
    <v-list-item :title="user?.fullName" prepend-icon="mdi-account" subtitle="Online" />
    <v-divider></v-divider>
    <v-list-item link title="Dashboard" to="/" />
    <v-list-item link title="Articles" to="/article" />
    <v-list-item v-if="user.role === 'admin'" link title="User" to="/user" />
    <!-- <v-list-item link title="Settings" /> -->
  </v-navigation-drawer>
  <v-main>
    <v-progress-linear v-if="loading" indeterminate />
    <router-view />
  </v-main>
</template>

<script lang="ts">
  export default {
    name: 'Full',
    computed: {
      user() {
        return this.$store.getters.user;
      },
      loading() {
        return this.$store.getters.loadingRequest;
      }
    },
    created() {
      this.$store.dispatch('setUser')
    },
    methods: {
      logout() {
        this.$store.dispatch('logout')
      }
    }
  }
</script>
