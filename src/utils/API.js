import axios from 'axios';

export default {
  //get all puppies from
  getAllPuppies: function () {
    return axios.get('/api/puppies')
  }
}