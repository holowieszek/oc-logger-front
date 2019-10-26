import { SET_GEOCACHES, CLEAR_GEOCACHES, SET_FIELDNOTES, CLEAR_FIELDNOTES } from '../mutation-types';
import OpenCachingService from '../../services/opencaching.service';
import asyncWrapper from '../../utils/asyncWrapper';

const state = {
  geocaches: [],
  fieldNotes: []
}

const getters = {
  geocaches: state => {
    return state.geocaches
  },
  fieldNotes: state => {
    return state.fieldNotes
  }
}

const actions = {
  async getGeoCache({ commit }, geocache) {
    commit(CLEAR_GEOCACHES);
    const { error, result } = await asyncWrapper(OpenCachingService.getGeoCache(geocache[0]));

    !error ? commit(SET_GEOCACHES, result.data) : console.error(error);
  },
  addLogs({ commit }, data) {
    data.map((cache, index) => {
      const data = {
        cacheCode: cache[0],
        when: cache[1],
        logType: cache[2],
        comment: 'Test aplikacji do logow ' + index
      }

      setTimeout(async () => {
        const { error, result } = await asyncWrapper(OpenCachingService.submitLogBook(data));
        console.log('error, result', error, result);
      }, index * 500)
    })
  },
  setFieldNotes({ commit }, data) {
    commit(SET_FIELDNOTES, data);
  },
}

const mutations = {
  [SET_GEOCACHES] (state, payload) {
    state.geocaches.push(payload);
  },
  [CLEAR_GEOCACHES] (state) {
    state.geocaches = [];
  },
  [SET_FIELDNOTES] (state, payload) {
    state.fieldNotes.push(payload);
  },
  [CLEAR_FIELDNOTES] (state) {
    state.fieldNotes = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}