import { Module } from "vuex";

import { api } from "@/util/axios";
import { Category } from "@/types/article";

type CategoryState = {
  categoryPage: PaginateResult<Category>;
};

const category: Module<CategoryState, unknown> = {
  namespaced: true,
  state: () => ({
    categoryPage: {
      docs: [],
      totalDocs: 0,
      limit: 10,
      hasPrevPage: false,
      hasNextPage: false,
      page: undefined,
      totalPages: 0,
      offset: 0,
      prevPage: undefined,
      nextPage: undefined,
      pagingCounter: 0
    },
  }),
  getters: {
    getCategory: (state) => (categoryId: string) =>
      state.categoryPage.docs.find((c) => c._id === categoryId),
    categoryPage: (state) => state.categoryPage,
  },
  mutations: {
    ADD_CATEGORY: (state, _category) => {
      let idx = -1;
      state.categoryPage.docs.map((r, i) => {
        if (r._id === _category._id) idx = i;
      });
      if (idx === -1) state.categoryPage.docs.push(_category);
      else state.categoryPage.docs[idx] = _category;
    },
    SET_CATEGORY_PAGE: (state, list) => {
      state.categoryPage = list;
    },
    REMOVE_CATEGORY(state, category) {
      let idx = -1;
      state.categoryPage.docs.map((r, i) => {
        if (r._id === category._id) idx = i;
      });
      if (idx > -1) state.categoryPage.docs.splice(idx, 1);
    },
  },
  actions: {
    fetchCategory(context, params = "") {
      api
        .get(`/v1/category${params}`)
        .then((response) => {
          context.commit("ADD_CATEGORY", response.data);
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
    async fetchCategoryList(context, params = "") {
      return await api
        .get(`/v1/category${params}`)
        .then((response) => {
          context.commit("SET_CATEGORY_PAGE", response.data);
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
    async createCategory(context, payload) {
      return await api
        .post(`/v1/category`, payload)
        .then((response) => {
          context.commit("ADD_CATEGORY", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Category created",
            },
            { root: true }
          );
          return response.data.category;
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
    updateCategory(context, data) {
      api
        .put(`/v1/category`, data)
        .then((response) => {
          context.commit("ADD_CATEGORY", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Category updated",
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
    deleteCategory(context, id) {
      api
        .delete(`/v1/category${id}`)
        .then((response) => {
          context.commit("REMOVE_CATEGORY", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Category deleted",
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

export default category;
