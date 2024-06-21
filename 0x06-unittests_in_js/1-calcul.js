/**
 * Performs a calculation based on the provided type and two numbers.
 *
 * @param {string} type - The type of calculation to perform ("SUM", "SUBTRACT", or "DIVIDE").
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number|string} - The result of the calculation, or "Error" if dividing by zero.
 */
function calculateNumber(type, a, b) {
  const roundedA = Math.round(a);
  const roundedB = Math.round(b);
  let result;

  if (type === 'SUM') {
    result = roundedA + roundedB;
  } else if (type === 'SUBTRACT') {
    result = roundedA - roundedB;
  } else if (type === 'DIVIDE') {
    if (roundedB === 0) {
      return 'Error';
    }
    result = roundedA / roundedB;
  }

  return result;
}

module.exports = calculateNumber;
