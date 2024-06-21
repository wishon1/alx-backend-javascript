const assert = require("assert");
const calculateNumber = require("./1-calcul")
/**
 * conntain tesyt cases for this function: function calculateNumber()
 */

describe("calculateNUmber", () => {
    it("if type=='SUM' and both the other two arguements are floats", () => {
        assert.strictEqual(("SUM", 1.4, 4.5), 6)
    });

    it("if type=='SUBTRACT' and both the other two arguements are floats", () => {
        assert.strictEqual(("SUBTRACT", 1.4, 4.5), -4)
    });

    it("if type=='DIVIDE' and both the other two arguements are floats", () => {
        assert.strictEqual(("DIVIDE", 1.4, 4.5), 0.2)
        assert.strictEqual(("DIVIDE", 1.4, 0), "Error")
    });
});
