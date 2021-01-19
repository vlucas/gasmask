import SpreadsheetClass from './SpreadsheetApp/Spreadsheet';
import SheetClass from './SpreadsheetApp/Sheet';
import RangeClass from './SpreadsheetApp/Range';

/**
 * Main SpreadsheetApp class
 */
export class SpreadsheetAppClass {
  static getActiveSpreadsheet() {
    return new SpreadsheetClass();
  }
}

export const SpreadsheetApp = SpreadsheetAppClass;
export const Spreadsheet = SpreadsheetClass;
export const Sheet = SheetClass;
export const Range = RangeClass;
