export default class Airport {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  // getters
  get name() {
    return this._name;
  }

  get code() {
    return this._code;
  }

  // setters
  set name(newName) {
    this._name = newName;
  }

  set code(newCode) {
    this._code = newCode;
  }

  get [Symbol.toStringTag]() {
    return this._code;
  }
}
