const chai = require('chai');
const chaiHttp = require('chai-http');
const { expect } = chai;
chai.use(chaiHttp);

// Assuming your Express server is in a file named app.js
const app = require('./app');

describe('Index Page', () => {
    // Test for correct status code
    it('should return status code 200', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });

    // Test for correct result
    it('should return the message "Welcome to the payment system"', (done) => {
        chai.request(app)
            .get('/')
            .end((err, res) => {
                expect(res.text).to.equal('Welcome to the payment system');
                done();
            });
    });
});
