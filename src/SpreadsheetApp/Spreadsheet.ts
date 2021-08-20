import Sheet from './Sheet';
import User from '../User';
import { randomIntegerWithLength } from '../_utils';

/**
 * Spreadsheet class (whole spreadsheet, collection of many Sheets)
 */
export default class Spreadsheet {
  id: string = 'docId_' + String(randomIntegerWithLength(16));
  name: string = '';
  sheets: { [name: string]: Sheet } = {};

  constructor(name?: string, rows?: number, cols?: number) {
    this.name = name || this.id;
  }

  getId() {
    return this.id;
  }

  deleteSheet(sheet: Sheet) {
    const foundSheetKey = Object.keys(this.sheets).filter((key) => this.sheets[key] === sheet)[0];

    if (foundSheetKey) {
      delete this.sheets[foundSheetKey];
    }
  }

  getActiveSheet() {
    const firstSheet = Object.keys(this.sheets)[0];

    return this.sheets[firstSheet];
  }

  getOwner() {
    return new User('owner@example.com');
  }

  getSheetId() {
    return this.id;
  }

  /**
   * Gets all the sheets in this spreadsheet
   */
  getSheets(): Sheet[] {
    return Object.values(this.sheets);
  }

  getSheetByName(name: string) {
    return this.sheets[name] || null;
  }

  insertSheet(sheetName: string, sheetIndex?: number, options?: { template: Sheet }) {
    this.sheets[sheetName] = new Sheet(sheetName);

    return this.sheets[sheetName];
  }

  toast(msg: string, title?: string, timeoutSeconds?: number) {}
}
