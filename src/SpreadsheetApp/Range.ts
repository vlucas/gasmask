export default class Range {
  value: string | null = null
  values: any[] = []

  constructor(values: any[]) {
    this.value;
    this.values = values;
  }

  setValue(value: string) { this.value = value; }
  getValue() { return this.value; }

  setValues(values: string[]) { this.values = values; }
  getValues() { return this.values; }

  setFontWeight(weight: string) {}
  setNumberFormat(format: string) {}
}
