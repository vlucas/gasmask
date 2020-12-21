import Cache from './Cache';

class CacheService {
  static getDocumentationCache(): Cache {
    return new Cache()
  }

  static getScriptCache(): Cache {
    return new Cache()
  }

  static getUserCache(): Cache {
    return new Cache()
  }
}
