const Utils = require('./utils');

/**
 * Sends a payment request to an API with the total amount and shipping cost,
 * using a utility function to calculate the sum.
 *
 * @param {number} totalAmount - The total amount of the payment.
 * @param {number} totalShipping - The shipping cost.
 */
function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const totalSum = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${totalSum}`);
}

module.exports = sendPaymentRequestToApi;
