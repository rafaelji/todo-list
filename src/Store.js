import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const vuex = new Vuex({
  state: {
    loggedInUser: {},
    showNotification: false,
  },
  mutations: {
    storeLoggedInUser(state) {
      state.loggedInUser = {};
    },
  },
});

export default vuex;
