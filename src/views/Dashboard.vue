<template>
  <v-container>
    <h2>Dashboard</h2>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title style="display: flex; justify-content: space-between">
            <div>{{ dashboardSummary.totalArticles }}</div>
            <div><v-icon icon="mdi-file" /></div>
          </v-card-title>
          <v-card-text>Atricles</v-card-text>
        </v-card>
      </v-col>
      <v-col>
        <v-card>
          <v-card-title style="display: flex; justify-content: space-between">
            <div>{{ dashboardSummary.totalCategories }}</div>
            <div><v-icon icon="mdi-diamond" /></div>
          </v-card-title>
          <v-card-text>Categories</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { createNamespacedHelpers } from 'vuex';

import dashboardStoreModule from '@/store/modules/dashboard';
const {
  mapActions: dashboardActions,
  mapGetters: dashboardGetters,
} = createNamespacedHelpers('DASHBOARD_SUMMARY');
export default {
  name: "Dashboard",
  created() {
    this.fetchDashboardSumary()
  },
  computed: {
    ...dashboardGetters(['dashboardSummary']),
  },
  methods: {
    ...dashboardActions(['fetchDashboardSumary']),
  },
  beforeCreate() {
      if (!this.$store.hasModule('DASHBOARD_SUMMARY')) {
        this.$store.registerModule('DASHBOARD_SUMMARY', dashboardStoreModule);
      }
  },
  beforeUnmount() {
    this.$store.unregisterModule('DASHBOARD_SUMMARY');
  }
}
</script>
