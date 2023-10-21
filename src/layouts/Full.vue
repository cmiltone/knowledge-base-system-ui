<template>
  <v-app-bar :elevation="2" title="Knowledge Base System" rounded>
    <template v-slot:append>
      <v-btn icon="mdi-logout" @click="logout" title="Logout"></v-btn>
    </template>
  </v-app-bar>
  <v-navigation-drawer>
    <v-list-item :title="user?.fullName" prepend-icon="mdi-account" subtitle="Online" />
    <v-divider></v-divider>
    <v-list-item link title="Dashboard" to="/" />
    <v-list-item link title="Articles" to="/article" />
    <v-list-item link title="Setting" />
  </v-navigation-drawer>
  <v-main>
    <router-view />
  </v-main>
</template>

<script lang="ts">
  export default {
    name: 'Full',
    computed: {
      user() {
        return this.$store.getters.user;
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
