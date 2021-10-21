import axios from 'axios';

export default {
  //get all puppies from
  getAllThePuppies: function () {
    return axios.get('/api/puppies')
  }
}