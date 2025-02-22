import Vue from "vue";
import Vuex from "vuex";
import ToDoListService from "@/services/ToDoListService";

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
      items: [],
    },
  },
  mutations: {
    setupToDoList(state, list) {
      state.toDoList = list;
    },
    storeLoggedInUser(state, userData) {
      state.loggedInUser = { ...userData };
    },
    showNotification(state, notificationData) {
      state.notification = { ...notificationData };
    },
    removeCurrentUserData(state) {
      state.loggedInUser = {};
      state.notification = {
        type: "",
        title: "",
        message: "",
      };
      state.toDoList = [];
      state.toDoListToEditId = null;
      state.currentEditingToDoList = {
        id: "",
        title: "",
        items: [],
      };
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
  actions: {
    async addNewToDoList(context, newTodoData) {
      try {
        context.commit("addNewToDoList", newTodoData);
        await ToDoListService.addNewToDoList(newTodoData);
      } catch (error) {
        context.commit("showNotification", {
          type: "error",
        });
        console.log(error);
      }
    },
    async removeToDoList(context, toDoListIdToDelete) {
      try {
        context.commit("removeToDoList", toDoListIdToDelete);
        await ToDoListService.deleteToDoListById(toDoListIdToDelete);
      } catch (error) {
        context.commit("showNotification", {
          type: "error",
        });
        console.log(error);
      }
    },
    async updateToDoList(context, toDoListToEdit) {
      try {
        await ToDoListService.updateToDoList(toDoListToEdit);
      } catch (error) {
        context.commit("showNotification", {
          type: "error",
        });
        console.log(error);
      }
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
