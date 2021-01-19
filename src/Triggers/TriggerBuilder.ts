import ClockTriggerBuilder from './ClockTriggerBuilder';

/**
 * TriggerBuilder
 * @link https://developers.google.com/apps-script/reference/script/trigger-builder
 */
export default class TriggerBuilder {
  protected _triggerFunction: string;

  constructor(triggerFunction: string) {
    this._triggerFunction = triggerFunction;
  }

  /*
  static forDocument(document)	DocumentTriggerBuilder	Creates and returns a DocumentTriggerBuilder tied to the given document.
  forDocument(key)	DocumentTriggerBuilder	Creates and returns a DocumentTriggerBuilder tied to the document with the given ID.
  forForm(form)	FormTriggerBuilder	Creates and returns a FormTriggerBuilder tied to the given form.
  forForm(key)	FormTriggerBuilder	Creates and returns a FormTriggerBuilder tied to the form with the given ID.
  forSpreadsheet(sheet)	SpreadsheetTriggerBuilder	Creates and returns a SpreadsheetTriggerBuilder tied to the given spreadsheet.
  forSpreadsheet(key)	SpreadsheetTriggerBuilder	Creates and returns a SpreadsheetTriggerBuilder tied to the spreadsheet with the given ID.
  forUserCalendar(emailId)	CalendarTriggerBuilder	Returns a builder for building calendar triggers.
  */

  /**
   * Creates and returns a ClockTriggerBuilder for building time-based triggers.
   */
  timeBased(): ClockTriggerBuilder {
    return new ClockTriggerBuilder(this._triggerFunction);
  }
}
