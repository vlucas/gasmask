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

    it('should fill in values in rows with blanks when range is larger than values', () => {
      const values = sheet.getRange('A1:J1').getValues();

      expect(values[0].length).toEqual(10);
    });

    it('should fill in values in columns with blanks when range is larger than values', () => {
      const values = sheet.getRange('A1:A10').getValues();

      expect(values.length).toEqual(10);
    });
  });

  describe('setValues', () => {
    it('should throw error when range length does not match update', () => {
      const range = sheet.getRange('A2:D2');

      expect(range.getValues()).toEqual([['2021-01-01', 1, 'Kwickiemart', 'Shops']]);

      try {
        // Update values and re-select new range from sheet
        range.setValues([['2021-01-01', '6.32', 'Kwickiemart', 'Shops Also', 'some extra column']]);
      } catch (e) {
        expect(e.message).toContain(
          'The number of columns in the data does not match the number of columns in the range'
        );
      }
    });
  });
});
