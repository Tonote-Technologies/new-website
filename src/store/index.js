import { createLogger, createStore } from "vuex";
import createPersistedState from "vuex-persistedstate";

const debug = process.env.NODE_ENV !== 'production';
const plugins = debug ? [createLogger(), createPersistedState()] : [createPersistedState()];

import state from "@/store/state";
import * as getters from "@/store/getters";
import * as mutations from "@/store/mutations";
import * as actions from "@/store/actions";

import auth from "@/store/modules/auth";

const modules = {
  auth,
};

export default createStore({
  state,
  getters,
  mutations,
  actions,
  modules,
  plugins: plugins,
});

