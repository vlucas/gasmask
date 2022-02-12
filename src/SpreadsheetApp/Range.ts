import Sheet from './Sheet';

export interface RangeOptions {
  a1?: string;
  row?: number;
  col?: number;
  numRows?: number;
  numColumns?: number;
}
export interface RangeComputed {
  row: number;
  col: number;
  numRows: number;
  numColumns: number;
}

export default class Range {
  __sheet: Sheet;
  criteria: RangeOptions;
  value: any | undefined;
  values: any[] = [];
  rangeValues: any[] = [];
  rangeComputed: RangeComputed;

  constructor(values: any[], criteria: RangeOptions, __sheet: Sheet) {
    this.__sheet = __sheet;
    this.values = values;
    this.criteria = criteria;

    if (criteria.a1) {
      this.rangeComputed = {
        row: 0,
        col: 0,
        numRows: 0,
        numColumns: 0,
      };
      this.rangeValues = getValuesFromA1Notation(this.values, criteria.a1);
      return;
    } else {
      this.rangeComputed = {
        row: criteria.row ? criteria.row - 1 : 0,
        col: criteria.col ? criteria.col - 1 : 0,
        numRows: criteria.numRows || 1,
        numColumns: criteria.numColumns || 1,
      };
    }
    this.rangeValues = getValuesWithCriteria(this.values, this.rangeComputed);
  }

  setValue(value: string) {
    this.value = value;

    // Update Sheet
    if (this.__sheet) {
      const rc = this.rangeComputed;
      this.__sheet.rows[rc.row + 1][rc.col] = value;
    }
  }
  getValue() {
    return this.value;
  }

  setValues(values: string[]) {
    this.values = values;

    // Update Sheet
    if (this.__sheet) {
      const rc = this.rangeComputed;
      this.__sheet.rows[rc.row + 1] = values;
      this.rangeValues = getValuesWithCriteria(this.values, this.rangeComputed);
    }
  }
  getValues() {
    return this.rangeValues;
  }

  // @TODO: All of these...
  setFontWeight(weight: string) {}
  setNumberFormat(format: string) {}
  setDataValidation(rule: any) {}
}

/**
 * The "meat" of the Range slicing...
 */
function getValuesWithCriteria(values: any[], c: RangeComputed): any[] {
  const rows = values.slice(c.row, c.row + c.numRows);
  const result = rows.map((row) => row.slice(c.col, c.col + c.numColumns));

  return result;
}

function letterToColumn(letter: string) {
  let column = 0,
    length = letter.length;

  for (var i = 0; i < length; i++) {
    column += (letter.charCodeAt(i) - 64) * Math.pow(26, length - i - 1);
  }

  return column;
}

/**
 * @link https://stackoverflow.com/a/58545538
 */
function getValuesFromA1Notation(values: any[][], textRange: string): any[][] {
  let startRow: number, startCol: number, endRow: number, endCol: number;
  let range = textRange.split(':');
  let ret = cellToRoWCol(range[0]);
  startRow = ret[0];
  startCol = ret[1];
  if (startRow == -1) {
    startRow = 0;
  }
  if (startCol == -1) {
    startCol = 0;
  }

  if (range[1]) {
    ret = cellToRoWCol(range[1]);
    endRow = ret[0];
    endCol = ret[1];
    if (endRow == -1) {
      endRow = values.length;
    }
    if (endCol == -1) {
      endCol = values.length;
    }
  } else {
    // only one cell
    endRow = startRow;
    endCol = startCol;
  }

  return values.slice(startRow, endRow + 1).map(function (i: any[]) {
    return i.slice(startCol, endCol + 1);
  });
}

function cellToRoWCol(cell: string): [number, number] {
  // returns row & col from A1 notation
  let row = Number(cell.replace(/[^0-9]+/g, ''));
  const letter = cell.replace(/[^a-zA-Z]+/g, '').toUpperCase();
  let column = letterToColumn(letter);

  row = row - 1;
  column--;

  return [row, column];
}
