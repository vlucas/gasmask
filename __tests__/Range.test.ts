import { Sheet } from '../src/SpreadsheetApp';

let sheet = new Sheet('TestSheet');
const sheetData = [
  ['Date', 'Amount', 'Name', 'Category'],
  ['2021-01-01', 1, 'Kwickiemart', 'Shops'],
  ['2021-01-02', 1, 'Shopmart', 'Shops'],
  ['2021-01-03', 1, 'Kwickiemart', 'Shops'],
  ['2021-01-03', 1, 'Gasmart', 'Gas'],
  ['2021-01-04', 1, 'Wholepaycheck', 'Groceries'],
];

beforeEach(() => {
  sheet = new Sheet('TestSheet');
  sheetData.forEach((row) => sheet.appendRow(row));
});

describe('Range', () => {
  describe('getValues', () => {
    it('should return full column of values in a1 notation', () => {
      const values = sheet.getRange('B2:B').getValues();
      const sum = values.reduce((prev, amount) => prev + amount[0], 0);

      expect(values).toEqual([[1], [1], [1], [1], [1]]);
      expect(sum).toEqual(5);
    });

    it('should return correct dimensions for whole-row end a1 notation', () => {
      const values = sheet.getRange('A1:3').getValues();
      expect(values.length).toEqual(3);
      expect(values[0].length).toEqual(4);
    });

    it('should fill in values in rows with blanks when range is larger than values', () => {
      const values = sheet.getRange('A1:J1').getValues();

      expect(values[0].length).toEqual(10);
    });

    it('should fill in values in columns with blanks when range is larger than values', () => {
      const values = sheet.getRange('A1:A10').getValues();

      expect(values.length).toEqual(10);
    });
  });

  describe('getValue', () => {
    it('should return value using numbers for row and column', () => {
      const value = sheet.getRange(2, 3).getValue();

      expect(value).toEqual('Kwickiemart');
    });
    it('should return value using a1 notation', () => {
      const value = sheet.getRange('C6').getValue();

      expect(value).toEqual('Wholepaycheck');
    });
    it('should only return top left value from range', () => {
      const value = sheet.getRange(3, 3, 2, 2).getValue();

      expect(value).toEqual('Shopmart');
    });
    it('should only return top left value from range using a1 notation', () => {
      const value = sheet.getRange('C5:D6').getValue();

      expect(value).toEqual('Gasmart');
    });
    it('should return value using a1 notation plus sheet reference', () => {
      const value = sheet.getRange('TestSheet!C5').getValue();

      expect(value).toEqual('Gasmart');
    });
  });

  describe('setValues', () => {
    it('should update each row in the range', () => {
      const newRows = [
        ['2022-01-01', '10', 'Newmart', 'Food'],
        ['2022-01-02', '20', 'Bestmart', 'Clothes'],
        ['2022-01-03', '30', 'Cheapmart', 'Electronics'],
      ];
      sheet.getRange(2, 1, 3, 4).setValues(newRows);
      const allRows = sheet.getDataRange().getValues();
      expect(allRows.slice(1, 4)).toEqual(newRows); // written rows correct
      expect(allRows[0]).toEqual(sheetData[0]);     // header untouched
      expect(allRows[4]).toEqual(sheetData[4]);     // row after range untouched
    });

    it('should throw error when range length does not match update', () => {
      const range = sheet.getRange('A2:D2');

      expect(() =>
        range.setValues([['2021-01-01', '6.32', 'Kwickiemart', 'Shops Also', 'some extra column']])
      ).toThrow('The number of columns in the data does not match the number of columns in the range');
    });
  });

  describe('setValue', () => {
    it('should update cell value using numbers for row and column', () => {
      const expectedSheetData = [
        ['Date', 'Amount', 'Name', 'Category'],
        ['2021-01-01', 1, 'Kwickiemart', 'Shops'],
        ['2021-01-02', 1, 'Shopmart', 'Shops'],
        ['2021-01-03', 1, 'Newmart', 'Shops'],
        ['2021-01-03', 1, 'Gasmart', 'Gas'],
        ['2021-01-04', 1, 'Wholepaycheck', 'Groceries'],
      ];

      sheet.getRange(4, 3).setValue('Newmart');

      expect(sheet.getDataRange().getValues()).toEqual(expectedSheetData);
    });
    it('should update cell value using a1 notation', () => {
      const expectedSheetData = [
        ['Date', 'Amount', 'Name', 'Category'],
        ['2021-01-01', 1, 'Kwickiemart', 'Shops'],
        ['2021-01-02', 1, 'Shopmart', 'Shops'],
        ['2021-01-03', 1, 'Updatedmart', 'Shops'],
        ['2021-01-03', 1, 'Gasmart', 'Gas'],
        ['2021-01-04', 1, 'Wholepaycheck', 'Groceries'],
      ];

      sheet.getRange('C4').setValue('Updatedmart');

      expect(sheet.getDataRange().getValues()).toEqual(expectedSheetData);
    });
  });
});
