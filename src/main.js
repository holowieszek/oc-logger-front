import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'



axios.defaults.baseURL = 'https://7y57t17d3a.execute-api.eu-central-1.amazonaws.com/dev/'


// const instance = axios.create({
//   baseURL: 'https://7y57t17d3a.execute-api.eu-central-1.amazonaws.com/dev/'
// })

// Vue.prototype.$api = instance;
// Vue.use({
//   install (Vue) {
//     Vue.prototype.$api = axios.create({
//       baseURL: 'https://7y57t17d3a.execute-api.eu-central-1.amazonaws.com/dev/'
//     })
//   }
// })

Vue.config.productionTip = false

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
