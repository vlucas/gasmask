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
  criteria: RangeOptions;
  value: any | undefined;
  values: any[] = [];
  rangeValues: any[] = [];
  rangeComputed: RangeComputed;

  constructor(values: any[], criteria: RangeOptions) {
    this.values = values;
    this.criteria = criteria;

    if (criteria.a1) {
      const a1Parts = criteria.a1.split(':');
      const parsed1 = a1NotationToRowCol(a1Parts[0]);
      const parsed2 = a1Parts[1] ? a1NotationToRowCol(a1Parts[1]) : { row: 1, col: 1 };

      this.rangeComputed = {
        row: parsed1.row - 1,
        col: parsed1.col - 1,
        numRows: parsed2.row || 1,
        numColumns: parsed2.col || 1,
      };
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
  }
  getValue() {
    return this.value;
  }

  setValues(values: string[]) {
    this.values = values;
  }
  getValues() {
    return this.rangeValues;
  }

  setFontWeight(weight: string) {}
  setNumberFormat(format: string) {}
}

/**
 * The "meat" of the Range slicing...
 */
function getValuesWithCriteria(values: any[], c: RangeComputed): any[] {
  const rows = values.slice(c.row, c.row + c.numRows);
  const result = rows.map((row) => row.slice(c.col, c.col + c.numColumns));

  return result;
}

const A1Regex = /(^[A-Z]+)|([0-9]+$)/gm;
export function a1NotationToRowCol(a1Notation: string) {
  const a1Parts = a1Notation.match(A1Regex);

  if (!a1Parts) {
    throw Error('Invalid A1 notation');
  }

  const rowLetter = a1Parts[0] || 'A';
  const col = a1Parts[1] ? parseInt(a1Parts[1]) : 1;
  const row = letterToColumn(rowLetter);
  const result = { row, col };

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
