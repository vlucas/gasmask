import Range from './Range';
import type { RangeOptions } from './Range';

export default class Sheet {
  name: string | null;
  rows: any[][];
  frozenCols: number | null = null;
  frozenRows: number | null = null;

  constructor(name: string) {
    this.name = name;
    this.rows = [];
  }
  activate() {}

  appendRow(row: any[]) {
    this.rows.push(row);
  }
  autoResizeColumn(colNumber: number) {}

  getName() {
    return this.name;
  }
  deleteRow() {}

  getLastColumn() {
    return this.rows.length ? this.rows[0].length : 1;
  }
  getLastRow() {
    return this.rows.length;
  }

  /**
   * @link https://developers.google.com/apps-script/reference/spreadsheet/sheet#getDataRange()
   */
  getDataRange() {
    return this.getRange(1, 1, this.getLastRow(), this.getLastColumn());
  }

  /**
   * getRange(row, column)
   * getRange(row, column, numRows)
   * getRange(row, column, numRows, numColumns)
   * getRange(a1Notation)
   */
  getRange(row: Number, column: Number): Range;
  getRange(row: Number, column: Number, numRows: Number): Range;
  getRange(row: Number, column: Number, numRows: Number, numColumns: Number): Range;
  getRange(a1: string): Range;
  getRange(row: string | Number, col?: Number, numRows?: Number, numColumns?: Number): Range {
    if (typeof row === 'string') {
      return new Range(this.rows, { a1: row } as RangeOptions, this);
    }

    return new Range(
      this.rows,
      {
        row,
        col,
        numRows,
        numColumns,
      } as RangeOptions,
      this
    );
  }

  getSheetValues(startRow: Number, startColumn: Number, numRows: Number, numColumns: Number) {
    return this.getRange(startRow, startColumn, numRows, numColumns).getValues();
  }

  setFrozenColumns(cols: number) {
    this.frozenCols = cols;
  }
  setFrozenRows(rows: number) {
    this.frozenRows = rows;
  }
  setName(name: string) {
    this.name = name;
  }
  showSheet() {}
}
