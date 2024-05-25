/**
  * Import the class Currency from 3-currency.js
  * Implement a class named Pricing:
  * Constructor attributes:
  * amount (Number)
  * currency (Currency)
  * Each attribute must be stored in an “underscore” attribute version
  * (ex: name is stored in _name)
  * Implement a getter and setter for each attribute.
  * Implement a method named displayFullPrice that returns the attributes in the
  * following format amount currency_name (currency_code).
  * Implement a static method named convertPrice. It should accept two arguments:
  * amount (Number), conversionRate (Number). The function should return the amount
  * multiplied by the conversion rate.
  *
  * @ Return: return the amout multiplied by the conversion rate
  */

// eslint-disable-next-line no-unused-vars
import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // getters
  get amount() {
    return this._amount;
  }

  get currency() {
    return this._currency;
  }

  // setters
  set amount(newAmount) {
    this._amount = newAmount;
  }

  set currency(newCurrency) {
    this._currency = newCurrency;
  }

  // method
  displayFullPrice() {
    // returns the attributes in the following format amount currency_name
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  // static method
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
