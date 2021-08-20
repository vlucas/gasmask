import User from './User';
import { randomIntegerWithLength } from './_utils';

/**
 * Session Base Class
 * @link https://developers.google.com/apps-script/reference/base/session
 */
export default class Session {
  static getActiveUser(): User {
    return new User('activeuser@example.com');
  }

  static getActiveUserLocale(): string {
    return 'en';
  }

  static getEffectiveUser(): User {
    return new User('activeuser@example.com');
  }

  static getScriptTimeZone(): string {
    return 'GMT';
  }

  static getTemporaryActiveUserKey(): string {
    return 'auKey_' + String(randomIntegerWithLength(16));
  }
}
