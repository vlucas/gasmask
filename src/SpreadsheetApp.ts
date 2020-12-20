import Spreadsheet from './SpreadsheetApp/Spreadsheet';
import Sheet from './SpreadsheetApp/Sheet';
import Range from './SpreadsheetApp/Range';

/**
 * Main SpreadsheetApp class
 */
export class SpreadsheetAppClass {
  public getActiveSpreadsheet() { return new Spreadsheet(); }
}

export default {
  SpreadsheetApp: new SpreadsheetAppClass(),
  Spreadsheet,
  Sheet,
  Range,
}
