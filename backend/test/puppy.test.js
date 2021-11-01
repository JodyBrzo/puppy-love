process.env.NODE_ENV = 'test';

const chai = require('chai');
const chaiHttp = require('chai-http');
const expect = chai.expect;
const should = chai.should;
const server = require('../server')
const puppy = require('../models/Puppy');

chai.use(chaiHttp);

beforeEach((done) => {
  puppy.deleteMany({}, function(err) {});
  done();
});

afterEach((done) => {
  puppy.deleteMany({}, function(err) {});
  done();
});

describe('Puppy workflow tests', () => {

  it('test default API route and return all puppies', (done) => {

    chai.request(server)
    .get('/')
    .end((err, res) => {
      // this.enableTimeouts(false)
      res.should.have.status(200);
      console.log("response is: ", res);
      res.body.should.be.a('object');    
      done();
    }).catch(done);
    
  });


});
