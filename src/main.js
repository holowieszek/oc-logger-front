import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import config from './config'
import ApiService from './services/api.service'

Vue.config.productionTip = false

ApiService.init(config.API_URL);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
