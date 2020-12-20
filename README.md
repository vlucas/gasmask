# GASMask

Mocks and stubs/dummies for Google Apps Script (GAS).

## Why?

Google Apps Script add-ons (like [BudgetSheet](https://www.budgetsheet.net) - the add-on I am developing) make a of
calls to globally available APIs that Google provides to your scripts. Unfortunately, Google does not provide any
standard mocking library for these APIs, so individual library authors are left to mock those global libraries
themselved in order to make their code unit testable.

## Focus

For now, the focus of this library is around **SpreadsheetApp** since that is the specific Google add-on I am
delevoping. The eventual goal is to cover most or all of the Google Apps Script APIs with full type support, with
community support.

