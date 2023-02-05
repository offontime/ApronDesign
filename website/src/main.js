import Vue from 'vue'
import IconApron from '@icon-apron/vue/package/index'
import ApronDesign from '../../vue/packages'
import VueClipboard from 'vue-clipboard2'
import App from './App.vue'
import router from './router'
import store from './store'
import 'animate.css'
import '@/utils/lib-flexible'

Vue.config.productionTip = false
Vue.use(ApronDesign)
Vue.use(IconApron)
Vue.use(VueClipboard)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
