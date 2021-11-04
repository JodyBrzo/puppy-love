
let chai = require('chai');
let chaiHttp= require('chai-http');

const server = require('../server')
chai.use(chaiHttp);


const requester = chai.request(server).keepOpen();

exports.mochaHooks = {

  requester: requester,

  beforeEach: function() {
    // global setup for all tests
  },
  afterAll: function() {
    console.log('//////////// ALL DONE /////////////')
    // one-time final cleanup
    requester.close()
  }
};
