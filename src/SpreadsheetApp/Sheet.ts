import Range from './Range';

export default class Sheet {
  name: string | null;
  rows: any[];
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

  getName() { return this.name; }
  deleteRow() {}

  getLastColumn() {
    return 0;
  }
  getRange(...args: any[]) { return new Range(args); }

  setFrozenColumns(cols: number) {
    this.frozenCols = cols;
  }
  setFrozenRows(rows: number) {
    this.frozenRows = rows;
  }
  setName(name: string) { this.name = name; }
  showSheet() {}
}

