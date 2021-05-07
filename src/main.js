import Vue from 'vue'
import App from './App.vue'
import firebaseMessaging from './firebase'

Vue.config.productionTip = false
Vue.prototype.$messaging = firebaseMessaging

new Vue({
  render: h => h(App),
}).$mount('#app')
