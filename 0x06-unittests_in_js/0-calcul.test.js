const assert = require('assert');
const calculateNumber = require('./0-calcul');

/**
 * contains test cases of this function: calculateNumber()
 * You can assume a and b are always number
 * Tests should be around the “rounded” part
 */

describe('calculateNumber', () => {
  it('should return the sum of two integers', () => {
    assert.strictEqual(calculateNumber(1, 2), 3);
  });

  it('should return a rounded number if an integer and a\
        float are given', () => {
    assert.strictEqual(calculateNumber(1.20, 2), 3);
    assert.strictEqual(calculateNumber(1.5, 2), 4);
  });

  it('should return the sum of two rounded numbers when given floating point numbers', () => {
    assert.strictEqual(calculateNumber(1, 2.0), 3);
    assert.strictEqual(calculateNumber(1.0, 2.0), 3);
    assert.strictEqual(calculateNumber(1.4, 2.5), 4);
    assert.strictEqual(calculateNumber(1.5, 2.6), 5);
    assert.strictEqual(calculateNumber(-1.5, 2.5), 2);
    assert.strictEqual(calculateNumber(0.1, 0.4), 0);
    assert.strictEqual(calculateNumber(0.8, 0.5), 2);
    assert.strictEqual(calculateNumber(2.24387, 2.567), 5);
    assert.strictEqual(calculateNumber(1.545, 2.456), 4);
  });
});
