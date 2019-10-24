import Vue from 'vue'
import Vuex from 'vuex'

import auth from './modules/auth';
import opencaching from './modules/opencaching';

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    auth,
    opencaching
  }
})
