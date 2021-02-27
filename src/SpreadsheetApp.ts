import SpreadsheetClass from './SpreadsheetApp/Spreadsheet';
import SheetClass from './SpreadsheetApp/Sheet';
import RangeClass from './SpreadsheetApp/Range';

let activeSpreadsheet = new SpreadsheetClass();

/**
 * Main SpreadsheetApp class
 */
export class SpreadsheetAppClass {
  static getActiveSpreadsheet() {
    return activeSpreadsheet;
  }

  static create(name: string, rows?: number, cols?: number) {
    activeSpreadsheet = new SpreadsheetClass(name, rows, cols);

    return activeSpreadsheet;
  }
}

export const SpreadsheetApp = SpreadsheetAppClass;
export const Spreadsheet = SpreadsheetClass;
export const Sheet = SheetClass;
export const Range = RangeClass;

