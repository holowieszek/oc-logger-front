import ApiService from './api.service';
import UserService from './user.service';

const OpenCachingService = {
  getGeoCache(cacheCode) {
    const tokens = UserService.getCurrentUser();
    const geoCache = ApiService.post('oc/geocache', { cacheCode: cacheCode, ...tokens });

    return geoCache;
  },
  submitLogBook(data) {
    const tokens = UserService.getCurrentUser();
    const logbook = ApiService.post('oc/logbook', { ...data, ...tokens });
    
    return logbook;
  }
}

export default OpenCachingService;