const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
    it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
        // Create a spy on Utils.calculateNumber
        const calculateNumberSpy = sinon.spy(Utils, 'calculateNumber');

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        assert(calculateNumberSpy.calledOnceWithExactly('SUM', 100, 20));

        // Restore the spy
        calculateNumberSpy.restore();
    });

    it('should log the correct total sum to the console', () => {
        // Create a spy on console.log to capture its output
        const consoleSpy = sinon.spy(console, 'log');

        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the correct message
        assert(consoleSpy.calledOnceWithExactly('The total is: 120'));

        // Restore the spy
        consoleSpy.restore();
    });
});
