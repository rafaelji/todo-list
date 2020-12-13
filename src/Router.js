import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/Home";
import SignIn from "@/pages/sign-in/SignIn";
import ToDoList from "@/pages/todo-list/ToDoList";

Vue.use(VueRouter);

export default new VueRouter({
  routes: [
    { path: "/", component: Home },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignIn },
    { path: "/app", component: ToDoList },
  ],
});
