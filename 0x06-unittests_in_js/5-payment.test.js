const sinon = require('sinon');
const assert = require('assert');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./5-payment');

describe('sendPaymentRequestToApi', () => {
    let consoleSpy;

    beforeEach(() => {
        consoleSpy = sinon.spy(console, 'log');
    });

    afterEach(() => {
        consoleSpy.restore();
    });

    it('should log the correct total sum to the console with arguments 100 and 20', () => {
             // Stub the Utils.calculateNumber function to return the correct sum
             const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(120);

             sendPaymentRequestToApi(100, 20);

             // Assert that the console was call with the correct message
             assert(consoleSpy.calledOnceWithExactly('The total is: 120'));

             // Restore the stub
             calculateNumberStub.restore();
    });

    it('should log the correct total sum to the console with arguments 10 and 10', () => {
        const calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(20);
        sendPaymentRequestToApi(10, 10);
        assert(consoleSpy.calledOnceWithExactly('The total is: 20'));
        calculateNumberStub.restore();
    });
});