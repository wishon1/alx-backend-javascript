/**
  * Implement a class named ClassRoom:
  *
  * Prototype: export default class ClassRoom
  * It should accept one attribute named maxStudentsSize (Number) and assigned
  * to _maxStudentsSize
  *
  * @return(int): returns an integer-maxStudentsSize
  */
export default class ClassRoom {
  constructor(maxStudentsSize) {
    // eslint-disable-next-line no-underscore-dangle
    this._maxStudentsSize = maxStudentsSize;
  }
}
