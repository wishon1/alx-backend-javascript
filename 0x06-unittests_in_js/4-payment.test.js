const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('sendPaymentRequestToApi', () => {
    let calculateNumberStub;
    let consoleSpy;

    beforeEach(() => {
        // Stub the Utils.calculateNumber function to always return 10
        calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
        // Spy on console.log
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        // Restore the stub and the spy after each test
        calculateNumberStub.restore();
        consoleSpy.restore();
    });

    it('should call Utils.calculateNumber with SUM type and correct arguments', () => {
        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that Utils.calculateNumber was called with the correct arguments
        assert(calculateNumberStub.calledOnceWithExactly('SUM', 100, 20));
    });

    it('should log the correct total sum to the console', () => {
        // Call the function under test
        sendPaymentRequestToApi(100, 20);

        // Assert that console.log was called with the correct message
        assert(consoleSpy.calledOnceWithExactly('The total is: 10'));
    });
});
