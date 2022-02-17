import { SpreadsheetApp, Spreadsheet, Sheet } from '../src/SpreadsheetApp';
import type { Sheet as SheetType } from '../src/SpreadsheetApp';

let sheet = new Sheet('TestSheet');
const sheetData = [
  ['Date', 'Amount', 'Name', 'Category'],
  ['2021-01-01', 5.32, 'Kwickiemart', 'Shops'],
  ['2021-01-02', 72.48, 'Shopmart', 'Shops'],
  ['2021-01-03', 1.97, 'Kwickiemart', 'Shops'],
  ['2021-01-03', 43.87, 'Gasmart', 'Gas'],
  ['2021-01-04', 824.93, 'Wholepaycheck', 'Groceries'],
];

beforeEach(() => {
  sheet = new Sheet('TestSheet');
  sheetData.forEach((row) => sheet.appendRow(row));
});

describe('Sheet', () => {
  it('should return a Spreadsheet instance when calling getActiveSpreadsheet()', () => {
    expect(SpreadsheetApp.getActiveSpreadsheet()).toBeInstanceOf(Spreadsheet);
  });

  describe('getLastRow', () => {
    it('should return accurate 1-based counted last row', () => {
      expect(sheet.getLastRow()).toBe(sheetData.length);
    });
  });

  describe('getLastColumn', () => {
    it('should return accurate 1-based counted last column', () => {
      expect(sheet.getLastColumn()).toBe(sheetData[0].length);
    });
  });

  describe('getDataRange', () => {
    it('should return full data range of the current spreadsheet', () => {
      expect(sheet.getDataRange().getValues()).toEqual(sheetData);
    });
  });

  describe('getRange', () => {
    it('getRange with row and col should return a range with a single cell', () => {
      const range = sheet.getRange(1, 1);

      expect(range.getValues()).toEqual([['Date']]);
    });

    it('getRange with row, col, and numRows', () => {
      const range = sheet.getRange(1, 2, 2);

      expect(range.getValues()).toEqual([['Amount'], [5.32]]);
    });

    it('getRange with row, col, numRows, and numColumns', () => {
      const range = sheet.getRange(1, 1, sheet.getLastRow(), sheet.getLastColumn());

      expect(range.getValues()).toEqual(sheetData);
    });

    it('getRange with A1 for single cell', () => {
      const range = sheet.getRange('A1');

      expect(range.getValues()).toEqual([['Date']]);
    });

    it('getRange with A1 for single row', () => {
      const range = sheet.getRange('A1:D1');

      expect(range.getValues()).toEqual([['Date', 'Amount', 'Name', 'Category']]);
    });

    it('getRange with A1 for multiple rows', () => {
      const range = sheet.getRange('A1:D6');

      expect(range.getValues()).toEqual(sheetData);
    });

    it('getRange returns range that updates values back to sheet', () => {
      const range = sheet.getRange('A2:D2');

      expect(range.getValues()).toEqual([['2021-01-01', 5.32, 'Kwickiemart', 'Shops']]);

      // Update values and re-select new range from sheet
      range.setValues([['2021-01-01', '6.32', 'Kwickiemart', 'Shops Also']]);

      const newRange = sheet.getRange('A2:D2');
      expect(newRange.getValues()).toEqual([['2021-01-01', '6.32', 'Kwickiemart', 'Shops Also']]);
    });
  });
});
