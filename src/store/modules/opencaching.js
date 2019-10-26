import { 
  SET_GEOCACHES,
  CLEAR_GEOCACHES,
  SET_FIELDNOTES,
  CLEAR_FIELDNOTES,
  SET_LOGGED_GEOCACHED,
  CLEAR_LOGGED_GEOCACHED } from '../mutation-types';
import OpenCachingService from '../../services/opencaching.service';
import asyncWrapper from '../../utils/asyncWrapper';

const state = {
  geocaches: [],
  fieldNotes: [],
  loggedGeocaches: []
}

const getters = {
  geocaches: state => {
    return state.geocaches
  },
  fieldNotes: state => {
    return state.fieldNotes
  },
  loggedGeocaches: state => {
    return state.loggedGeocaches
  }
}

const actions = {
  async getGeoCache({ commit }, geocache) {
    commit(CLEAR_GEOCACHES);
    const { error, result } = await asyncWrapper(OpenCachingService.getGeoCache(geocache[0]));

    !error ? commit(SET_GEOCACHES, result.data) : console.error(error);
  },
  addLogs({ commit }, geocaches) {
    commit(CLEAR_LOGGED_GEOCACHED);

    geocaches.fieldNotes.map((cache, index) => {
      const data = {
        cacheCode: cache[0],
        when: cache[1],
        logType: cache[2],
        comment: geocaches.comment
      }

      setTimeout(async () => {
        const { error, result } = await asyncWrapper(OpenCachingService.submitLogBook(data));
        console.log('error, result', error, result);

        !error ? commit(SET_LOGGED_GEOCACHED, result) : console.error(error);
      }, index * 100)
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
  },
  [SET_LOGGED_GEOCACHED] (state, payload) {
    state.loggedGeocaches.push(payload);
  },
  [CLEAR_LOGGED_GEOCACHED] (state) {
    state.loggedGeocaches = []
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}