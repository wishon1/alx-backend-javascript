/**
  * In this file, import uploadPhoto and createUser from utils.js Knowing that
  * the functions in utils.js return promises, use the prototype below to
  * collectively resolve all promises and log body firstName lastName to the
  * console.
  *   function handleProfileSignup()
  * In the event of an error, log Signup system offline to the console
  *
  * @Returns(promise): Returns a promise
  */
import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Returning a promise that resolves when all promises in the array are
  // resolved
  return Promise
    // Calling uploadPhoto and createUser functions concurrently
    .all([uploadPhoto(), createUser()])
    // Handling the resolved state of the promises
    .then((res) => {
      // msg with the body of the first resps, the first name and last name from
      // the second resps
      console.log(`${res[0].body} ${res[1].firstName} ${res[1].lastName}`);
    })
    // Handling any errors that occur during the promise execution
    .catch(() => console.log('Signup system offline'));
}
