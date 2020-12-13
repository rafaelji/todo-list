import Vue from "vue";
import App from "./App.vue";
import router from "./Router";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import { auth } from "./services/api";

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
      render: (h) => h(App),
    }).$mount("#app");
  }
});
