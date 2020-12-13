import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "@/pages/home/Home";
import Login from "@/pages/login/Login";

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login }
  ]
});
