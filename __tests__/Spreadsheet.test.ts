import { SpreadsheetApp, Spreadsheet, Sheet } from '../src/SpreadsheetApp';

describe('Spreadsheet', () => {
  it('should return a Sheet instance when calling getSheetByName()', () => {
    const ss = new Spreadsheet();
    ss.insertSheet('Test_Sheet');

    expect(ss.getSheetByName('Test_Sheet')).toBeInstanceOf(Sheet);
  });

  it('should delete a sheet via deleteSheet()', () => {
    const ss = new Spreadsheet();
    ss.insertSheet('Test_Sheet2');

    const sheet = ss.getSheetByName('Test_Sheet2');

    ss.deleteSheet(sheet);
    expect(ss.getSheetByName('Test_Sheet')).toBeNull();
  });
});

