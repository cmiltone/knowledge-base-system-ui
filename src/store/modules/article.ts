import { Module } from "vuex";

import { api } from "@/util/axios";
import { Article } from "@/types/article";

type ArticleState = {
  articlePage: PaginateResult<Article>;
};

const article: Module<ArticleState, unknown> = {
  namespaced: true,
  state: () => ({
    articlePage: {
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
    getArticle: (state) => (articleId: string) =>
      state.articlePage.docs.find((a) => a._id === articleId),
    articlePage: (state) => state.articlePage,
  },
  mutations: {
    ADD_ARTICLE: (state, _article) => {
      let idx = -1;
      state.articlePage.docs.map((r, i) => {
        if (r._id === _article._id) idx = i;
      });
      if (idx === -1) state.articlePage.docs.push(_article);
      else state.articlePage.docs[idx] = _article;
    },
    SET_ARTICLE_PAGE: (state, list) => {
      state.articlePage = list;
    },
    REMOVE_ARTICLE(state, article) {
      let idx = -1;
      state.articlePage.docs.map((r, i) => {
        if (r._id === article._id) idx = i;
      });
      if (idx > -1) state.articlePage.docs.splice(idx, 1);
    },
  },
  actions: {
    async fetchArticle(context, params = "") {
      return await api
        .get(`/v1/article${params}`)
        .then((response) => {
          context.commit("ADD_ARTICLE", response.data);
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
    async fetchArticleList(context, params = "") {
      return await api
        .get(`/v1/article${params}`)
        .then((response) => {
          context.commit("SET_ARTICLE_PAGE", response.data);
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
    async createArticle(context, payload) {
      return await api
        .post(`/v1/article`, payload)
        .then((response) => {
          context.commit("ADD_ARTICLE", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Article created",
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
    updateArticle(context, data: { id: string; article: Article }) {
      api
        .put(`/v1/article/${data.id}`, data.article)
        .then((response) => {
          context.commit("ADD_ARTICLE", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Article updated",
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
    deleteArticle(context, id) {
      api
        .delete(`/v1/article${id}`)
        .then((response) => {
          context.commit("REMOVE_ARTICLE", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "Article deleted",
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

export default article;
