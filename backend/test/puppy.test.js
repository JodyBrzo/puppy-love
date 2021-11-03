
let chai = require('chai');
let chaiHttp= require('chai-http');
// let expect = chai.expect;
const server = require('../server')

chai.use(chaiHttp);

const requester = chai.request(server).keepOpen();

console.log ('server started');

describe('Puppy API',()=>{
 it('Get All Puppies',()=>{
  return requester.get('/api/puppies/').then((res)=>{
    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.be.a('array')
    console.log (res.body)
   })
   .then(() => requester.close())
   .catch((err)=>{
       throw err;
   });
});
});
