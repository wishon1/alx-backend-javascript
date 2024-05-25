/**
  * mplement a class named Currency:
  * - Constructor attributes:
  * code (String)
  * name (String)
  * Each attribute must be stored in an “underscore” attribute version 
  * (ex: name is stored in _name)
  * Implement a getter and setter for each attribute.
  * Implement a method named displayFullCurrency that will return the attributes
  * in the following format name (code).
  *
  * @ Return: Return the attributes in the following format name (code)
  */
export default class Currency {
  constructor(code, name) {
    this._code = code;
    this._name = name;
  }

  // getters
  get code() {
    return this._code;
  }

  get name() {
    return this._name;
  }

  // setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  // method
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
