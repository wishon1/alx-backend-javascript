/**
  * Implement a class named HolbertonCourse:
  * Constructor attributes:
  * name (String)
  * length (Number)
  * students (array of Strings)
  * Make sure to verify the type of attributes during object creation
  * Each attribute must be stored in an “underscore” attribute version
  * (ex: name is stored in _name)
  * Implement a getter and setter for each attribute.
  *
  * @ Return:
  */
export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
      throw new Error('Name must be a string');
    }

    if (typeof length !== 'number') {
      throw new Error('Length must be a number');
    }

    if (!Array.isArray(students)) {
      throw new Error('Students must be an array');
    } else {
      for (const obj of students) {
        if (typeof obj !== 'string') {
          throw new Error('students array must contain strings');
        }
      }
    }

    this._name = name;
    this._length = length;
    this._students = students;
  }

  // getters
  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  // setters
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new Error('Name must be a string');
    }
    this._name = newName;
  }

  set students(newStudents) {
    if (!Array.isArray(newStudents)) {
      throw new Error('Students must be an array');
    } else {
      for (const obj of newStudents) {
        if (typeof obj !== 'string') throw new Error('students array must contain strings');
      }
    }
    this._students = newStudents;
  }

  set length(newLength) {
    if (typeof newLength !== 'number') {
      throw new Error('Length must be a number');
    }
    this._length = newLength;
  }
}
