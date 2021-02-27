import { SpreadsheetApp, Spreadsheet, Sheet } from '../src/SpreadsheetApp';

describe('Sheet', () => {
  it('should return a Spreadsheet instance when calling getActiveSpreadsheet()', () => {
    expect(SpreadsheetApp.getActiveSpreadsheet()).toBeInstanceOf(Spreadsheet);
  });
});

