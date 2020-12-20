import Sheet from "./Sheet";

/**
 * Spreadsheet class (whole spreadsheet, collection of many Sheets)
 */
export default class Spreadsheet {
    getSheetByName(name: string) { return new Sheet(name); }

    toast(msg: string, title?: string) {}
}