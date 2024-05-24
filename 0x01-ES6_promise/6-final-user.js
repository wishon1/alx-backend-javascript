/**
  * Import signUpUser from 4-user-promise.js and uploadPhoto from
  * 5-photo-reject.js.
  * Write and export a function named handleProfileSignup. It should accept three
  * arguments firstName (string), lastName (string), and fileName (string). The
  * function should call the two other functions. When the promises are all settled
  * it should return an array with the following structure:
  *
  * [
  *   {
  *     status: status_of_the_promise,
  *     value: value or error returned by the Promise
  *   },
  *   ...
  * ]
  *
  * @Return(Array): Returns an array
  */
import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  // Create an array of promises
  const promises = [
    signUpUser(firstName, lastName),
    uploadPhoto(fileName),
  ];

  // Use Promise.allSettled to handle all promises
  // Map through the results to format them
  return Promise.allSettled(promises).then((results) => results.map((result) => {
    if (result.status === 'fulfilled') {
      return {
        status: result.status,
        value: result.value,
      };
    }
    return {
      status: result.status,
      value: result.reason,
    };
  }));
}
