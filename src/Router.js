import Vue from "vue";
import VueRouter from "vue-router";
import Home from "@/pages/home/Home";
import SignIn from "@/pages/sign-in/SignIn";
import { auth } from "./services/api";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    { path: "/", component: Home },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignIn },
    {
      path: "/app",
      component: () => import("@/pages/todo-list/ToDoList"),
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/sign-in");

    return;
  }

  next();
});

export default router;
