import Properties from './Properties';

// Setup properties so they remian constant to scope
const _properties = {
  'documentProperties': new Properties(),
  'scriptProperties': new Properties(),
  'userProperties': new Properties(),
};

/**
 * PropertiesService
 * @link https://developers.google.com/apps-script/reference/properties/properties-service
 */
export default class PropertiesService {
  static getDocumentProperties(): Properties {
    return _properties['documentProperties'];
  }

  static getScriptProperties(): Properties {
    return _properties['scriptProperties'];
  }

  static getUserProperties(): Properties {
    return _properties['userProperties'];
  }
}

