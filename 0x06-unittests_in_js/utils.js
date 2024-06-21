/**
 * Create a new file named utils.js
 * Create a new module named Utils
 * Create a property named calculateNumber and paste your previous code in the function
 * Export the Utils module
 */
const Utils = {
    calculateNumber(type, a, b) {
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
}

module.exports = Utils;