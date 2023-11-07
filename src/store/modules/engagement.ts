import { Module } from "vuex";

import { api } from "@/util/axios";

type EngagementState = {};

const engagement: Module<EngagementState, unknown> = {
  namespaced: true,
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {
    async createEngagement(context, payload) {
      return await api
        .post(`/v1/engagement`, payload)
        .then((response) => {
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "",
            },
            { root: true }
          );
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
    async updateEngagement(context, data) {
      return await api
        .put(`/v1/engagement`, data)
        .then((response) => {
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "",
            },
            { root: true }
          );
          return response.data.engagement;
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
    deleteEngagement(context, id) {
      api
        .delete(`/v1/engagement${id}`)
        .then((response) => {
          context.commit("REMOVE_CATEGORY", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Engagement deleted",
            },
            { root: true }
          );
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

export default engagement;
