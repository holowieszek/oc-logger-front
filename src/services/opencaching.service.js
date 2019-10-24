import ApiService from './api.service';

const OpenCachingService = {
    getGeoCache(cacheCode) {
        const geoCache = ApiService.post('oc/geocache', { cacheCode: cacheCode });
        return geoCache;
    }
}
export default OpenCachingService;