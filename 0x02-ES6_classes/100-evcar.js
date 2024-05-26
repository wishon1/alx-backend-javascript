/**
  * Import Car from 10-car.js.
  * Implement a class named EVCar that extends the Car class:
  * Constructor attributes:
  *   brand (String)
  *   motor (String)
  *   color (String)
  *   range (String)
  * Each attribute must be stored in an “underscore” attribute version (ex: name is stored in _name)
  * For privacy reasons, when cloneCar is called on a EVCar object, the object returned should be an
  * instance of Car instead of EVCar.
  *
  * @Return: return an object which is an instance of car
  */
import Car from './10-car';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this.range = range;
  }

  // getter for range
  get range() {
    return this._range;
  }

  // setter for range
  set range(newRange) {
    this._range = newRange;
  }

  cloneCar() {
    
    // Access the species constructor defined by the parent class
    const Species = super.constructor[Symbol.species];

    return new Species();
  }
}
