import { SpreadsheetApp, Spreadsheet, Sheet } from '../src/SpreadsheetApp';

describe('SpreadsheetApp', () => {
  it('should return a Spreadsheet instance when calling getActiveSpreadsheet()', () => {
    expect(SpreadsheetApp.getActiveSpreadsheet()).toBeInstanceOf(Spreadsheet);
  });
});

describe('Spreadsheet', () => {
  it('should return a Sheet instance when calling getSheetByName()', () => {
    const ss = new Spreadsheet();

    expect(ss.getSheetByName('Test_Sheet')).toBeInstanceOf(Sheet);
  });
});

