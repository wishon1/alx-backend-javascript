/**
  * Using the following prototype
  * function signUpUser(firstName, lastName) {
  * }
  * That returns a resolved promise with this object:
  *
  * {
  *   firstName: value,
  *   lastName: value,
  * }
  *
  * @Returns(promise): Returns a promise
  */
export default function signUpUser(firstName, lastName) {
  return Promise.resolve({
    firstName,
    lastName,
  });
}
