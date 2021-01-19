import TriggerBuilder from './Triggers/TriggerBuilder';
import type Trigger from './Trigger';

// Setup triggers so they remian constant to scope
const _triggers: Trigger[] = [];

/**
 * ScriptApp
 * @link https://developers.google.com/apps-script/reference/script/script-app
 */
export default class ScriptApp {
  static getProjectTriggers(): Trigger[] {
    return _triggers;
  }

  static getUserTriggers(): Trigger[] {
    return _triggers;
  }

  static newTrigger(functionName: string): TriggerBuilder {
    return new TriggerBuilder(functionName);
  }

  static deleteTrigger(trigger: Trigger): void {

  }
}

