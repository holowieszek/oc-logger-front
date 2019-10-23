import asyncWrapper from '../../utils/asyncWrapper';
import getParams from '../../utils/params';
import { SET_IS_LOGGED_IN, SET_USERNAME, SET_IS_LOADING } from '../mutation-types';


import UserService from '../../services/user.service';

const state = {
  isLogged: false,
  username: '',
  isLoading: false
}

const getters = {
  isLoggedIn: state => {
    return state.isLogged
  },
  username: state => {
    return state.username
  },
  isLoading: state => {
    return state.isLoading
  }
}

const actions = {
  async checkIfAuthenticated({ commit }, data) {
    commit(SET_IS_LOADING, true);

    const { error, result } = await asyncWrapper(UserService.checkIfAuthenticated());

    if (result) {
      commit(SET_IS_LOGGED_IN, true);
      commit(SET_USERNAME, result.data.username);
      commit(SET_IS_LOADING, false);
    } else {
      commit(SET_IS_LOGGED_IN, false);
      commit(SET_USERNAME, null);
      commit(SET_IS_LOADING, false)
    }
  },
  async getOAuthToken({ commit }) {
    const { error, result } = await asyncWrapper(UserService.getOAuthToken());

    if (result) {
      const params = getParams(result.data, ['oauth_token', 'oauth_token_secret']);

      localStorage.setItem('oauth_token', params.oauth_token);
      localStorage.setItem('oauth_token_secret', params.oauth_token_secret);

      window.location.href = `https://opencaching.pl/okapi/services/oauth/authorize?oauth_token=${params.oauth_token}`; 
    } else {
      console.log(error);
    }
  },
  async getAccessToken({ commit }, query) {
    const { error, result } = await asyncWrapper(UserService.getAccessToken(query));

    if (result) {
      const params = getParams(result.data, ['oauth_token', 'oauth_token_secret']);

      localStorage.setItem('oauth_token', params.oauth_token);
      localStorage.setItem('oauth_token_secret', params.oauth_token_secret);

      window.location.href = '/dashboard';
      
    } else {
      console.error(error);
    }
  }
}

const mutations = {
  [SET_IS_LOGGED_IN] (state, payload) {
    state.isLogged = payload;
  },
  [SET_USERNAME] (state, payload) {
    state.username = payload;
  },
  [SET_IS_LOADING] (state, payload) {
    state.isLoading = payload;
  }  
}

export default {
  state,
  getters,
  actions,
  mutations
}