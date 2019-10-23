import axios from 'axios';

const ApiService = {
  init(baseURL) {
    axios.defaults.baseURL = baseURL;
  },

  get(resource) {
    return axios.get(resource);
  },

  post(resource, data) {
    return axios.post(resource, data);
  },

  customResource(data) {
    return axios(data);
  }
}

export default ApiService;