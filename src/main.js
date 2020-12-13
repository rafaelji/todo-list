import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import store from "./Store";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { auth } from "./services/Api";

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

let app;

auth.onAuthStateChanged(() => {
  if (!app) {
    new Vue({
      router,
      store,
      render: (h) => h(App),
    }).$mount("#app");
  }
});
