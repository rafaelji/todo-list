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
    toDoList: [],
  },
  mutations: {
    storeLoggedInUser(state, userData) {
      state.loggedInUser = { ...userData };
    },
    showNotification(state, notificationData) {
      state.notification = { ...notificationData };
    },
    removeCurrentUser(state) {
      state.loggedInUser = {};
    },
    addNewToDoList(state, newTodoData) {
      state.toDoList = [...state.toDoList, newTodoData];
    },
    removeToDoList(state, toDoListIdToDelete) {
      const currentTodoList = [...state.toDoList];
      currentTodoList.splice(
        currentTodoList.findIndex((item) => item.id === toDoListIdToDelete),
        1
      );

      state.toDoList = [...currentTodoList];
    },
  },
  getters: {
    notification: (state) => {
      return state.notification;
    },
    currentUser: (state) => {
      return state.loggedInUser;
    },
    currentToDoList: (state) => {
      return state.toDoList;
    },
  },
});

export default store;
