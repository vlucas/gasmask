import type StringDict from './types/StringDict';

export default class Properties {
  private _data: StringDict = {};

  constructor() {
    this._data = {};
  }

  deleteAllProperties() {
    this._data = {};

    return this;
  }

  deleteProperty(key: string) {
    delete this._data[key];

    return this;
  }

  getKeys() {
    return Object.keys(this._data);
  }

  getProperties() {
    return this._data;
  }

  getProperty(key: string) {
    return this._data[key] || null;
  }

  setProperties(properties: StringDict = {}, deleteAllOthers: boolean = false) {
    this._data = Object.assign(deleteAllOthers ? {} : this._data, properties);

    return this;
  }

  setProperty(key: string, value: string) {
    this._data[key] = value;

    return this;
  }
}
