import { DataValidationBuilder, SpreadsheetApp, Spreadsheet, Sheet } from '../src/SpreadsheetApp';

describe('SpreadsheetApp', () => {
  it('should return a Spreadsheet instance when calling getActiveSpreadsheet()', () => {
    expect(SpreadsheetApp.getActiveSpreadsheet()).toBeInstanceOf(Spreadsheet);
  });

  it('should return a DataValidationBuilder when calling newDataValidation()', () => {
    expect(SpreadsheetApp.newDataValidation()).toBeInstanceOf(DataValidationBuilder);
  });
});
