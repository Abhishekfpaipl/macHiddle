import { createStore } from "vuex";
import MacStore from "@/modules/macHiddle/store/MacStore.js";
import LoggedInUserStore from "@/modules/macHiddle/store/LoggedInUserStore.js";
export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},

  modules: {
    MacStore: MacStore,
    LoggedInUserStore: LoggedInUserStore
  },
});
