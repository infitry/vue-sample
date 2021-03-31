// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import axios from 'axios'
import Date from '@/components/utils/Date'
import App from './App'
import router from './router'

Vue.component('dateComponent', Date) // 전역변수 예제
Vue.config.productionTip = false
Vue.prototype.$axios = axios
/* eslint-disable no-new */

new Vue({
  components: { App },
  router,
  template: '<App/>'
}).$mount('#app')

// const app2 = new Vue({
//   el: '#app2',
//   data() {
//     return {
//       message: '두 번째 인스턴스'
//     }
//   }
// })