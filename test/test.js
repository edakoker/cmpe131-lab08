const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../app');
const expect = chai.expect;

chai.use(chaiHttp);

describe('GET /', () => {
  it('should return status 200 and HTML content', (done) => {
    chai.request(app)
      .get('/')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res).to.be.html;
        expect(res.text).to.include('Welcome to a simple Node.js App!');
        done();
      });
  });
});