import { SET_GEOCACHES } from '../mutation-types';
import OpenCachingService from '../../services/opencaching.service';
import asyncWrapper from '../../utils/asyncWrapper';

const state = {
  geocaches: []
}

const getters = {
  caches: state => {
    return state.geocaches
  }
}

const actions = {
  async getGeoCache({ commit }, cacheCode) {
    const { error, result } = await asyncWrapper(OpenCachingService.getGeoCache(cacheCode));

    if (!error) {
      console.log(result.data)
    } else {
      console.log(error);
    }
  }
}

const mutations = {
  [SET_GEOCACHES] (state, payload) {
    state.geocaches = payload;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}