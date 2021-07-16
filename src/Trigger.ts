import { randomIntegerWithLength } from './_utils';

enum EventType {
  SPREADSHEETS,
  CLOCK,
  FORMS,
  DOCUMENTS,
  CALENDAR,
}

/**
 * ScriptApp Trigger
 * @link https://developers.google.com/apps-script/reference/script/trigger
 */
export default class Trigger {
  protected _id: string;
  protected _eventType: EventType;
  protected _functionName: string;
  protected _triggerSource: EventType;

  constructor(functionName: string) {
    this._id = String(randomIntegerWithLength(20));
    this._functionName = functionName;
    this._eventType = EventType.SPREADSHEETS;
    this._triggerSource = EventType.SPREADSHEETS;
  }

  getEventType(): EventType {
    return this._eventType;
  }

  getHandlerFunction(): string {
    return this._functionName;
  }

  getTriggerSource(): EventType {
    return this._triggerSource;
  }

  getTriggerSourceId(): string | null {
    return this._triggerSource === EventType.CLOCK ? null : 'gasmask_mock_' + this._id;
  }

  getUniqueId(): string {
    return this._id;
  }
}
