import Spreadsheet from './SpreadsheetApp/Spreadsheet';

/**
 * Main SpreadsheetApp class
 */
export default class SpreadsheetApp {
  getActiveSpreadsheet() { return new Spreadsheet(); }
}
