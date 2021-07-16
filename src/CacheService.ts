import Cache from './Cache';

// Setup properties so they remian constant to scope
const _cache = {
  documentCache: new Cache(),
  scriptCache: new Cache(),
  userCache: new Cache(),
};

/**
 * CacheService
 * @link https://developers.google.com/apps-script/reference/cache/cache-service
 */
export default class CacheService {
  static getDocumentCache(): Cache {
    return _cache['documentCache'];
  }

  static getScriptCache(): Cache {
    return _cache['scriptCache'];
  }

  static getUserCache(): Cache {
    return _cache['userCache'];
  }
}
