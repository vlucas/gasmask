import Sheet from "./Sheet";

/**
 * Spreadsheet class (whole spreadsheet, collection of many Sheets)
 */
export default class Spreadsheet {
  static getSheetByName(name: string) { return new Sheet(name); }

  static toast(msg: string, title?: string) {}
}
