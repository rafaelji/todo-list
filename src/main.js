import Vue from 'vue'
import App from './App.vue'
import Vuesax from 'vuesax'
import router from './Router'

import 'vuesax/dist/vuesax.css'

Vue.config.productionTip = false

Vue.use(Vuesax)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
