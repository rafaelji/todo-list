import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: {},
    showNotification: false,
  },
  mutations: {
    storeLoggedInUser(state, payload) {
      state.loggedInUser = { ...payload };
    },
  },
});

export default store;
