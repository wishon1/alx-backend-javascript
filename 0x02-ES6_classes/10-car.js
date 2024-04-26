export default class Car {
  constructor(brand, motor, color) {
    this._motor = motor;
    this._brand = brand;
    this._color = color;
  }

  // getter for motor
  get motor() {
    return this._motor;
  }

  // setter for motor
  set motor(newMotor) {
    this._motor = newMotor;
  }

  get brand() {
    return this._brand;
  }

  set brand(newBrand) {
    this._brand = newBrand;
  }

  get color() {
    return this._color;
  }

  set color(newColor) {
    this._color = newColor;
  }

  static get [Symbol.species]() {
    return this;
  }

  cloneCar() {
    const Species = this.constructor[Symbol.species];

    return new Species();
  }
}
