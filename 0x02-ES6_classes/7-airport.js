/**
  * Implement a class named Airport:
  * Constructor attributes:
  *   name (String)
  *   code (String)
  * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
  * The default string description of the class should return the airport code (example below).
  *
  * @Return: return the airport code (example below).
  */
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
