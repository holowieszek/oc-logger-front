import asyncWrapper from '../../utils/asyncWrapper';
import axios from 'axios';
import { SET_IS_LOGGED_IN, SET_USERNAME } from '../mutation-types';

const state = {
  isLogged: false,
  username: ''
}

const getters = {
  isLoggedIn: state => {
    return state.isLogged
  }
}

const actions = {
  async checkIfAuthenticated({ commit }, data) {
    const { error, result } = await asyncWrapper(axios.post('oc/user', data));

    !error ? commit(SET_IS_LOGGED_IN, true) : commit(SET_IS_LOGGED_IN, false);

    if (!error) {
      const { username } = result.data;
      
      commit(SET_IS_LOGGED_IN, true);
      commit(SET_USERNAME, username);
    } else {
      commit(SET_IS_LOGGED_IN, false);
      commit(SET_USERNAME, null);

      localStorage.clear();
    }
  }
}

const mutations = {
  [SET_IS_LOGGED_IN] (state, payload) {
    state.isLogged = payload;
  },
  [SET_USERNAME] (state, payload) {
    state.username = payload;
  }  
}

export default {
  state,
  getters,
  actions,
  mutations
}