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
  it('should return full column of values in a1 notation', () => {
    const values = sheet.getRange('B2:B').getValues();
    const sum = values.reduce((prev, amount) => prev + amount[0], 0);

    expect(values).toEqual([[1], [1], [1], [1], [1]]);
    expect(sum).toEqual(5);
  });
});
