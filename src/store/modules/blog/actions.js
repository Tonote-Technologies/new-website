import User from "@/api/Auth";
import router from "@/router/router";

export const logoutUser = ({ commit }, formData) => {
  User.logout(formData)
    .then(() => {
      window.localStorage.removeItem('vuex');

      if (process.env.NODE_ENV == 'development') {
        window.location.href = process.env.VUE_APP_URL_AUTH_LOCAL
      } else {
        window.location.href = process.env.VUE_APP_URL_AUTH_LIVE;
      }
    })
    .catch((error) => {
      if (error.response.status === 401 || error.response.status == 422) {
        commit("SET_TOKEN", null);
        router.push({ name: "Login" });
      }
    });
};

export const loginUser = ({ commit }, formData) => {
  User.login(formData)
    .then((response) => {
      commit("SET_TOKEN", response.data.token);
      commit("SET_TOKEN_TYPE", response.data.token_type);
    })
    .catch((error) => {
      console.log(error)
    });
};