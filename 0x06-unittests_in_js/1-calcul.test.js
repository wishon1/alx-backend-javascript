const assert = require('assert');
const calculateNumber = require('./1-calcul');

/**
 * contain test cases for this function: calculateNumber()
 */

describe('calculateNumber', () => {
    it("if type=='SUM' and both the other two arguments are floats", () => {
        assert.strictEqual(calculateNumber("SUM", 1.4, 4.5), 6);
    });

    it("if type=='SUBTRACT' and both the other two arguments are floats", () => {
        assert.strictEqual(calculateNumber("SUBTRACT", 1.4, 4.5), -4);
    });

    it("if type=='DIVIDE' and both the other two arguments are floats", () => {
        assert.strictEqual(calculateNumber("DIVIDE", 1.4, 4.5), 0.2);
        assert.strictEqual(calculateNumber("DIVIDE", 1.4, 0), "Error");
    });
});
