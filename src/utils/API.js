import axios from 'axios';

export default {
  //get all puppies
  getAllThePuppies: function () {
    return axios.get('/api/puppies')
  },
  //add a new puppy
  createPuppy: function (puppy) {
    return axios.post('/api/puppies/add', puppy)
  }
}