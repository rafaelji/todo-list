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
    toDoListToEditId: null,
    currentEditingToDoList: {
      id: "",
      title: "",
      imgUrl: "",
      items: [],
    },
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
    editToDoList(state, toDoListIdToEditId) {
      state.toDoListToEditId = toDoListIdToEditId;
    },
    setCurrentEditingToDoList(state, currentToDoListEditing) {
      state.currentEditingToDoList = currentToDoListEditing;
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
    toDoListSelectedToEdit: (state) => {
      return state.toDoListToEditId;
    },
  },
});

export default store;
