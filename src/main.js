import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vant from 'vant'
import {Toast} from 'vant'
Vue.config.productionTip = false

Vue.prototype.$msg = Toast

Vue.use(vant)
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
