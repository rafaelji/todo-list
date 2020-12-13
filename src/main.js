import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Vuesax from 'vuesax'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(Vuesax)

new Vue({
  render: h => h(App),
}).$mount('#app')
