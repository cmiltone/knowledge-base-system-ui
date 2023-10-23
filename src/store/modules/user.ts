import { Module } from "vuex";

import { api } from "@/util/axios";

type UserState = {
  userPage: PaginateResult<User>;
};

const user: Module<UserState, unknown> = {
  namespaced: true,
  state: () => ({
    userPage: {
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
    getUser: (state) => (userId: string) =>
      state.userPage.docs.find((a) => a._id === userId),
    userPage: (state) => state.userPage,
  },
  mutations: {
    ADD_USER: (state, _user) => {
      let idx = -1;
      state.userPage.docs.map((r, i) => {
        if (r._id === _user._id) idx = i;
      });
      if (idx === -1) state.userPage.docs.push(_user);
      else state.userPage.docs[idx] = _user;
    },
    SET_USER_PAGE: (state, list) => {
      state.userPage = list;
    },
    REMOVE_USER(state, user) {
      let idx = -1;
      state.userPage.docs.map((r, i) => {
        if (r._id === user._id) idx = i;
      });
      if (idx > -1) state.userPage.docs.splice(idx, 1);
    },
  },
  actions: {
    async fetchUser(context, params = "") {
      return await api
        .get(`/v1/user${params}`)
        .then((response) => {
          context.commit("ADD_USER", response.data);
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
    async fetchUserList(context, params = "") {
      return await api
        .get(`/v1/user${params}`)
        .then((response) => {
          context.commit("SET_USER_PAGE", response.data);
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
    async createUser(context, payload) {
      return await api
        .post(`/v1/user`, payload)
        .then((response) => {
          context.commit("ADD_USER", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "User created",
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
    async updateUser(context, data) {
      return await api
        .put(`/v1/user`, data)
        .then((response) => {
          context.commit("ADD_USER", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "User updated",
            },
            { root: true }
          );
          return response.data
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
    deleteUser(context, id) {
      api
        .delete(`/v1/user${id}`)
        .then((response) => {
          context.commit("REMOVE_USER", response.data);
          context.dispatch(
            "setToast",
            {
              title: "Success",
              type: "success",
              text: "User deleted",
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

export default user;
