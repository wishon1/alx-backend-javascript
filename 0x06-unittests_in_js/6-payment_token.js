/**
 * getPayTokenFromAPI- Async tests with done
 *
 * @param {boolean} : true or false
 *
 * @returns: When success is true, it should return a resolved promise with
 * the object {data: 'Successful response from the API' } Otherwise, the
 * function is doing nothing.
 */
function getPaymentTokenFromAPI(success) {
  if (success === true) {
    return Promise.resolve({ data: 'Successful response from the API' });
  }
}

module.exports = getPaymentTokenFromAPI;
