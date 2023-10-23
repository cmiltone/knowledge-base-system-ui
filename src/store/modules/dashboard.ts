import { Module } from "vuex";

import { api } from "@/util/axios";

type DashboardState = {
  dashboardSummary: {
    totalArticles: number;
    totalCategories: number;
  }
};

const article: Module<DashboardState, unknown> = {
  namespaced: true,
  state: () => ({
    dashboardSummary: {
      totalArticles: 0,
      totalCategories: 0,
    },
  }),
  getters: {
    dashboardSummary: (state) => state.dashboardSummary,
  },
  mutations: {
    SET_DASHBOARD_SUMMARY: (state, data) => {
      state.dashboardSummary = data;
    },
  },
  actions: {
    async fetchDashboardSumary(context, params = "") {
      return await api
        .get(`/v1/dashboard-summary${params}`)
        .then((response) => {
          context.commit("SET_DASHBOARD_SUMMARY", response.data);
          return response.data;
        })
        .catch((error) => {
          context.dispatch(
            "setToast",
            {
              title: "Request failed!",
              type: "error",
              text: error.response?.data?.error?.message,
            },
            { root: true }
          );
        });
    },
  },
};

export default article;
