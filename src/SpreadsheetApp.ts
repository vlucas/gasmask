import SpreadsheetClass from './SpreadsheetApp/Spreadsheet';
import SheetClass from './SpreadsheetApp/Sheet';
import RangeClass from './SpreadsheetApp/Range';
import DataValidationBuilderClass from './SpreadsheetApp/DataValidationBuilder';

let activeSpreadsheet = new SpreadsheetClass();

/**
 * Main SpreadsheetApp class
 */
export class SpreadsheetAppClass {
  static getActiveSpreadsheet(): SpreadsheetClass {
    return activeSpreadsheet;
  }

  static getActiveSheet(): SheetClass {
    return activeSpreadsheet.getActiveSheet();
  }

  static create(name: string, rows?: number, cols?: number): SpreadsheetClass {
    activeSpreadsheet = new SpreadsheetClass(name, rows, cols);

    return activeSpreadsheet;
  }

  static newDataValidation(): DataValidationBuilderClass {
    return new DataValidationBuilderClass();
  }

  static flush() {}
}

export const DataValidationBuilder = DataValidationBuilderClass;
export const SpreadsheetApp = SpreadsheetAppClass;
export const Spreadsheet = SpreadsheetClass;
export const Sheet = SheetClass;
export const Range = RangeClass;
