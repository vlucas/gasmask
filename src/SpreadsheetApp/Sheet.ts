import Range from './Range';

export default class Sheet {
  name: string | null;
  rows: any[];

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

  getRange(...args: any[]) { return new Range(args); }

  showSheet() {}
}
