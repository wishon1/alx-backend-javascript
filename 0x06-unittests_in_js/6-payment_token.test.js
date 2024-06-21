const assert = require('assert');
const getPaymentTokenFromAPI = require('./6-payment_token');
const { response } = require('express');

/**
 * Test the suite for getPayTokenFromAPI function
 */
describe('getPaymentTokenFromAPI', () => {
    it('should return a resolve promise with the correct obj when succes is true', (done) => {
        getPaymentTokenFromAPI(true).then((response) => {
            assert.deepStrictEqual(response, {data: 'Successful response from the API'});
            done();
        }).catch(done);
    });
});