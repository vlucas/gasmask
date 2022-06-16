# GASMask

Mocks and stubs/dummies for Google Apps Script (GAS).

## Why?

Google Apps Script add-ons (like [BudgetSheet](https://www.budgetsheet.net) - the add-on I am developing) make a of
calls to globally available APIs that Google provides to your scripts. Unfortunately, Google does not provide any
standard mocking library for these APIs, so individual library authors are left to mock those global libraries
themselves in order to make their code unit testable.

## Focus

For now, the focus of this library is around **SpreadsheetApp** since that is the specific Google add-on I am
delevoping. The eventual goal is to cover most or all of the Google Apps Script APIs with full type support, with
community support.

## Installation

To use `gasmask` install it in your project as a devDependency:

```
npm i gasmask -D
```

Now you are ready to get started using gasmask in your tests.

## Usage

Assuming you are trying to test a method that shows a simple toast message:

```javascript
  function showToastMessage(msg, title) {
    const ss = SpreadsheetApp.getActiveSpreadsheet();

    ss.toast(msg, title || 'My Add-On');
  },
```

Just import what you need to use in your tests:

```javascript
import { Spreadsheet } from 'gasmask';

describe('showToastMessage', () => {
  it('should display a toast message to the user', () => {
    const testMessage = 'test message here';
    const mockToast = jest.spyOn(Spreadsheet, 'toast'); // Spy the 'Spreadsheet.toast' method to ensure it gets called

    // Call our method
    showToastMessage(testMessage);

    // Now we ensure that it was called with the correct arguments
    expect(mockToast).toBeCalledWith(testMessage, 'My Add-On');
  });
});
```
