const { mochaHooks } = require('./hooks'); 
const { expect } = require('chai');
let chai = require('chai');

console.log ('server started');
console.log ('requester started:', mochaHooks);

describe('Puppy API',()=>{
 it('Should Get All Puppies and return an array',()=>{
  return mochaHooks.requester.get('/api/puppies/').then((res) => {

    //Asserts
    chai.expect(res).to.have.status(200);
    chai.expect(res.body).to.be.a('array')
   })
   .catch((err)=>{
       throw err;
   });
});

it('Should Post A Puppy', ()=>{

  let puppy = {
    name: 'Magenta',
    gender: 'Male',
    mother: 'Hazel',
    father: 'Jed',
    birthDate: '2021-10-21T05:45:00.000Z',
    deceasedDate: null,
    owner: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      street: '',
      city: '',
      region: '',
      postal: '',
      country: ''
    },
    temperatures: [],
    weights: [],
    furDescriptions: [],
    umbilicus: [],
    eyes: [],
    ears: [],
    nails: [],
    medications: [],
    milkSupplements: [],
    vaccines: [],
    vetChecks: [],
    notes: []
};

  return mochaHooks.requester.post('/api/puppies/add')
  .send(puppy)
  .then((res) => {
    console.log('Post res.body: ', res.body);
    // console.log('Post res.error: ', res.error);
    //Asserts
    chai.expect(res.status).to.be.equal(200);
    chai.expect(res.body).to.be.a('object');
    console.log(res.body.error);

    let savedPuppy = res.body;
    chai.expect(savedPuppy.name).to.be.equal(puppy.name);
    chai.expect(savedPuppy.gender).to.be.equal(puppy.gender);
    chai.expect(savedPuppy.mother).to.be.equal(puppy.mother);
    chai.expect(savedPuppy.father).to.be.equal(puppy.father);
    chai.expect(savedPuppy.birthDate).to.be.equal(puppy.birthDate);
    chai.expect(savedPuppy.deceasedDate).to.be.equal(puppy.deceasedDate);
    chai.expect(savedPuppy.owner.lastName).to.be.equal(puppy.owner.lastName);
    chai.expect(savedPuppy.owner.phone).to.be.equal(puppy.owner.phone);
    chai.expect(savedPuppy.owner.email).to.be.equal(puppy.owner.email);
    chai.expect(savedPuppy.owner.street).to.be.equal(puppy.owner.street);
    chai.expect(savedPuppy.owner.city).to.be.equal(puppy.owner.city);
    chai.expect(savedPuppy.owner.region).to.be.equal(puppy.owner.region);
    chai.expect(savedPuppy.owner.postal).to.be.equal(puppy.owner.postal);
    chai.expect(savedPuppy.owner.country).to.be.equal(puppy.owner.country);
    chai.expect(savedPuppy.temperatures[0]).to.be.equal(puppy.temperatures[0]);
    chai.expect(savedPuppy.weights[0]).to.be.equal(puppy.weights[0]);
    chai.expect(savedPuppy.furDescriptions[0]).to.be.equal(puppy.furDescriptions[0]);
    chai.expect(savedPuppy.umbilicus[0]).to.be.equal(puppy.umbilicus[0]);
    chai.expect(savedPuppy.eyes[0]).to.be.equal(puppy.eyes[0]);
    chai.expect(savedPuppy.ears[0]).to.be.equal(puppy.ears[0]);
    chai.expect(savedPuppy.nails[0]).to.be.equal(puppy.nails[0]);
    chai.expect(savedPuppy.medications[0]).to.be.equal(puppy.medications[0]);
    chai.expect(savedPuppy.milkSupplements[0]).to.be.equal(puppy.milkSupplements[0]);
    chai.expect(savedPuppy.vaccines[0]).to.be.equal(puppy.vaccines[0]);
    chai.expect(savedPuppy.vetChecks[0]).to.be.equal(puppy.vetChecks[0]);
    chai.expect(savedPuppy.notes[0]).to.be.equal(puppy.notes[0]);
  })
  // .then(() => requester.close())
  .catch((err)=>{
    console.log(err);
    throw err;
  });
})
});