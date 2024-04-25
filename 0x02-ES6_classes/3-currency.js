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
