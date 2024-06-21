const chai = require('chai');

const { expect } = chai;
const calculateNumber = require('./2-calcul_chai');

/**
 * contain test cases for this function: calculateNumber()
 */

describe('calculateNumber', () => {
  it("if type=='SUM' and both the other two arguments are floats", () => {
    expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
  });

  it("if type=='SUBTRACT' and both the other two arguments are floats", () => {
    expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
  });

  it("if type=='DIVIDE' and both the other two arguments are floats", () => {
    expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
  });
});
