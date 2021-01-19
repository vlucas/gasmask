import Trigger from '../Trigger';

/**
 * ClockTriggerBuilder
 * @link https://developers.google.com/apps-script/reference/script/clock-trigger-builder
 */
export default class ClockTriggerBuilder {
  protected _functionName: string;

  constructor(functionName: string) {
    this._functionName = functionName;
  }

  /**
   * Specifies the minimum duration (in milliseconds) after the current time that the trigger runs.
   * @param durationMilliseconds
   */
  after(durationMilliseconds: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies when the trigger runs.
   * @param date
   */
  at(date: Date): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies that the trigger fires on the given date, by default near midnight (+/- 15 minutes).
   * @param year
   * @param month
   * @param day
   */
  atDate(year: number, month: number, day: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies the hour the trigger at which the trigger runs.
   * @param hour
   */
  atHour(hour: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Creates the trigger.
   */
  create(): Trigger {
    return new Trigger(this._functionName);
  }

  /**
   * Specifies to run the trigger every n days.
   * @param n
   */
  everyDays(n: number): ClockTriggerBuilder	{
    return this;
  }

  /**
   * Specifies to run the trigger every n hours.
   * @param n
   */
  everyHours(n: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies to run the trigger every n minutes.
   * @param n
   */
  everyMinutes(n: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies to run the trigger every n weeks.
   * @param n
   */
  everyWeeks(n: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies the timezone for the specified dates/time when the trigger runs.
   * @param timezone
   */
  inTimezone(timezone: string): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies the minute at which the trigger runs (plus or minus 15 minutes).
   * @param minute
   */
  nearMinute(minute: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies the date in the month that the trigger runs.
   * @param day
   */
  onMonthDay(day: number): ClockTriggerBuilder {
    return this;
  }

  /**
   * Specifies the day of the week that the trigger runs.
   * @param day
   */
  onWeekDay(day:number): ClockTriggerBuilder {
    return this;
  }
}

