
let chai = require('chai');
let chaiHttp= require('chai-http');
let expect = chai.expect;
const server = require('../server')

chai.use(chaiHttp);
const requester = chai.request(server).keepOpen();
console.log ('server started');

describe('Product API',()=>{
//   it('Get All Products',()=>{
//     return chai.request('http://localhost:5001').get('/api/puppies/').then((res)=>{
//          console.log ('I am in the function')
//          chai.expect(res).to.have.status(200);
//          console.log (res.body)
//      }).catch((err)=>{
//          throw err;
//      })
//  })
 it('Get All Products',()=>{
  return requester.get('/').then((res)=>{
       console.log ('I am in the function')
       chai.expect(res).to.have.status(200);
       console.log (res.body)
   })
   .then(() => requester.close())
   .catch((err)=>{
       throw err;
   })
})
})





// process.env.NODE_ENV = 'test';

// const chai = require('chai');
// const chaiHttp = require('chai-http');
// const expect = chai.expect;
// const should = chai.should();
// const server = require('../server')
// const Puppy = require('../models/Puppy');

// chai.use(chaiHttp);

// const requester = chai.request(server).keepOpen();

// // beforeEach((done) => {
// //   Puppy.deleteMany({}, function(err) {});
// //   done();
// // });

// // afterEach((done) => {
// //   Puppy.deleteMany({}, function(err) {});
// //   done();
// // });


// describe('Puppy workflow tests', () => {

//     // it('Get All Products',()=>{
//     //    return chai.request('http://localhost:5001/').get('/api/puppies/').then((res)=>{
//     //         expect(res).to.have.status(200);
//     //     }).catch((err)=>{
//     //         throw err;
//     //     })
//     // })


//   it('test default API route and return all puppies', () => {

    

//     // chai.request(server)
//     // .get('/')
//     // .end((err, res) => {
//     //   // this.enableTimeouts(false)
//     //   res.should.have.status(200);
//     //   console.log("response is: ", res);
//     //   res.body.should.be.a('array');    
//     //   done();
//     // }).catch(done);

//     chai.request(server)
//     Promise.all([
//       requester.get('/')
//     ])
//     .then((res) => {
//       res.should.have.status(500);
//       console.log ('I am in the test');
//       console.log("response is: ", res);
//       res.body.should.be.a('array');    
//     })
//     .then(() => requester.close())
//     .catch((err) =>{
//       throw err;
//     });
//       // done()
    
//     })
    
// });
