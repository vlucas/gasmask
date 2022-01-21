import type Range from './Range';

const DataValidationCriteria = [
  'DATE_AFTER', // Requires a date that is after the given value.
  'DATE_BEFORE', //	Requires a date that is before the given value.
  'DATE_BETWEEN', //	Requires a date that is between the given values.
  'DATE_EQUAL_TO', //	Requires a date that is equal to the given value.
  'DATE_IS_VALID_DATE', //	Requires a date.
  'DATE_NOT_BETWEEN', //	Requires a date that is not between the given values.
  'DATE_ON_OR_AFTER', //	Require a date that is on or after the given value.
  'DATE_ON_OR_BEFORE', //	Requires a date that is on or before the given value.
  'NUMBER_BETWEEN', //	Requires a number that is between the given values.
  'NUMBER_EQUAL_TO', //	Requires a number that is equal to the given value.
  'NUMBER_GREATER_THAN', //	Require a number that is greater than the given value.
  'NUMBER_GREATER_THAN_OR_EQUAL_TO', //	Requires a number that is greater than or equal to the given value.
  'NUMBER_LESS_THAN', //	Requires a number that is less than the given value.
  'NUMBER_LESS_THAN_OR_EQUAL_TO', //	Requires a number that is less than or equal to the given value.
  'NUMBER_NOT_BETWEEN', //	Requires a number that is not between the given values.
  'NUMBER_NOT_EQUAL_TO', //	Requires a number that is not equal to the given value.
  'TEXT_CONTAINS', //	Requires that the input contains the given value.
  'TEXT_DOES_NOT_CONTAIN', //	Requires that the input does not contain the given value.
  'TEXT_EQUAL_TO', //	Requires that the input is equal to the given value.
  'TEXT_IS_VALID_EMAIL', //	Requires that the input is in the form of an email address.
  'TEXT_IS_VALID_URL', //	Requires that the input is in the form of a URL.
  'VALUE_IN_LIST', //	Requires that the input is equal to one of the given values.
  'VALUE_IN_RANGE', //	Requires that the input is equal to a value in the given range.
  'CUSTOM_FORMULA', //	Requires that the input makes the given formula evaluate to true.
  'CHECKBOX', //	Requires that the input is a custom value or a boolean; rendered as a checkbox.
] as const;

export default class DataValidationBuilder {
  _allowInvalid: boolean = false;
  _criteriaType: typeof DataValidationCriteria | null = null;
  _helpText: string = '';

  /**
   * Constructs a data validation rule from the settings applied to the builder.
   */
  build(): DataValidation {
    return this;
  }

  /**
   * Creates a builder for a data validation rule based on this rule's settings.
   */
  copy(): DataValidationBuilder {
    return this;
  }

  /**
   * Returns true if the rule shows a warning when input fails data validation, or false if it rejects the input entirely.
   */
  getAllowInvalid(): boolean {
    return this._allowInvalid;
  }

  /**
   * Gets the rule's criteria type as defined in the DataValidationCriteria enum.
   */
  getCriteriaType(): typeof DataValidationCriteria | null {
    return this._criteriaType;
  }

  /**
   * Gets an array of arguments for the rule's criteria.
   */
  getCriteriaValues(): any[] {
    return [];
  }

  /**
   * Gets the rule's help text, or null if no help text is set.
   */
  getHelpText(): string {
    return this._helpText;
  }

  /**
   * Sets the data validation rule to require that the input is one of the specified values.
   */
  requireCheckbox(checkedValue: any = '', uncheckedValue: any = ''): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date.
   */
  requireDate(): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date after the given value.
   */
  requireDateAfter(date: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date before the given value.
   */
  requireDateBefore(date: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date that falls between, or is either of, two specified dates.
   */
  requireDateBetween(start: Date, end: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date equal to the given value.
   */
  requireDateEqualTo(date: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date that does not fall between, and is neither of, two specified dates.
   */
  requireDateNotBetween(start: Date, end: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date on or after the given value.
   */
  requireDateOnOrAfter(date: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a date on or before the given value.
   */
  requireDateOnOrBefore(date: Date): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the given formula evaluates to true.
   */
  requireFormulaSatisfied(formula: string): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number that falls between, or is either of, two specified numbers.
   */
  requireNumberBetween(start: number, end: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number equal to the given value.
   */
  requireNumberEqualTo(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number greater than the given value.
   */
  requireNumberGreaterThan(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number greater than or equal to the given value.
   */
  requireNumberGreaterThanOrEqualTo(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number less than the given value.
   */
  requireNumberLessThan(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number less than or equal to the given value.
   */
  requireNumberLessThanOrEqualTo(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number that does not fall between, and is neither of, two specified numbers.
   */
  requireNumberNotBetween(start: number, end: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require a number not equal to the given value.
   */
  requireNumberNotEqualTo(number: number): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input contains the given value.
   */
  requireTextContains(text: string): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input does not contain the given value.
   */
  requireTextDoesNotContain(text: string): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input is equal to the given value.
   */
  requireTextEqualTo(text: string): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input is in the form of an email address.
   */
  requireTextIsEmail(): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input is in the form of a URL.
   */
  requireTextIsUrl(): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input is equal to one of the given values, with an option to hide the dropdown menu.
   */
  requireValueInList(values: any, showDropdown: boolean = false): DataValidationBuilder {
    return this;
  }

  /**
   * Sets the data validation rule to require that the input is equal to a value in the given range, with an option to hide the dropdown menu.
   */
  requireValueInRange(range: Range, showDropdown: boolean = false): DataValidationBuilder {
    return this;
  }

  /**
   * Sets whether to show a warning when input fails data validation or whether to reject the input entirely.
   */
  setAllowInvalid(allowInvalidData: boolean): DataValidationBuilder {
    this._allowInvalid = allowInvalidData;
    return this;
  }

  /**
   * Sets the help text that appears when the user hovers over the cell on which data validation is set.
   */
  setHelpText(helpText: string): DataValidationBuilder {
    this._helpText = helpText;
    return this;
  }

  /**
   * Sets the data validation rule to criteria defined by DataValidationCriteria values, typically taken from the criteria and arguments of an existing rule.
   */
  withCriteria(criteria: any, args: any): DataValidationBuilder {
    return this;
  }
}

export class DataValidation extends DataValidationBuilder {}
