import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    loggedInUser: {},
    notification: {
      type: "",
      title: "",
      message: "",
    },
  },
  mutations: {
    storeLoggedInUser(state, userData) {
      state.loggedInUser = { ...userData };
    },
    showNotification(state, notificationData) {
      state.notification = { ...notificationData };
    },
  },
  getters: {
    notification: (state) => {
      return state.notification;
    },
  },
});

export default store;
