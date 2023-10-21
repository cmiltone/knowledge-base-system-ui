import { clearAuth, setAuth } from "@/util/auth";
import { api } from "@/util/axios";
import { Module } from "vuex";

type AuthState = {
  user: User | undefined;
  redirectUrl: string;
};

const auth: Module<AuthState, unknown> = {
  state: {
    user: undefined,
    redirectUrl: "",
  },
  getters: {
    user: (state) => state.user,
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_REDIRECT_URL(state, url) {
      state.redirectUrl = url;
    },
  },
  actions: {
    async login(context, { identifier, password, url}) {
      return await api
        .post("/v1/auth/login", { identifier, password })
        .then((response) => {
          setAuth({ token: response.data.token, user: response.data.user, url });
          return response.data;
        })
        .catch((error) => {
          context.dispatch("setToast", {
            title: "Login failed!",
            type: "error",
            text: error.response?.data?.error?.message,
          });
        });
    },
    async register(context, { fullName, email, phoneNumber, password, url}) {
      return await api
        .post("/v1/auth/register", { fullName, email, phoneNumber, password })
        .then((response) => {
          context.dispatch("setToast", {
            title: "Success",
            type: "success",
            text: "Successfully registered!",
          });
          setAuth({ token: response.data.token, user: response.data.user, url });
          return response.data.user;
        })
        .catch((error) => {
          context.dispatch("setToast", {
            title: "Registration failed!",
            type: "error",
            text: error.response?.data?.error?.message,
          });
        });
    },
    setRedirectUrl(context, url) {
      context.commit("SET_REDIRECT_URL", url);
    },
    setUser(context) {
      const user = JSON.parse(localStorage.getItem('user') as string);
      context.commit('SET_USER', user);
    },
    logout() {
      clearAuth('/login')
    }
  },
};

export default auth;
