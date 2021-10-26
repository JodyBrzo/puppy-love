import axios from 'axios';

export default {
  //get all puppies
  getAllThePuppies: function () {
    return axios.get('/api/puppies')
  },
  //add a new puppy
  createPuppy: function (puppy) {
    return axios.post('/api/puppies/add', puppy)
  },
  findPuppyById: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}`)
  },
  updatePuppyById: function(puppyId, puppy) {
    return axios.put(`/api/puppies/${puppyId}`, puppy)
  },
  removePuppyById: function(puppyId) {
    return axios.delete(`/api/puppies/${puppyId}`)
  },
  addTempToPuppy: function(puppyId, temp) {
    return axios.post(`/api/puppies/${puppyId}/temp`, temp)
  },
  findAllTempsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/temp`)
  },
  updateTempByPuppy: function(puppyId, tempId, temp) {
    return axios.put(`/api/puppies/${puppyId}/temp/${tempId}`, temp)
  },
  removeTempFromPuppy: function(puppyId, tempId) {
    return axios.delete(`/api/puppies/${puppyId}/temp/${tempId}`)
  },
  addWeightToPuppy: function(puppyId, weight) {
    return axios.post(`/api/puppies/${puppyId}/weight`, weight)
  },
  findAllWeightsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/weight`)
  },
  updateWeightByPuppy: function(puppyId, weightId, weight) {
    return axios.put(`/api/puppies/${puppyId}/weight/${weightId}`, weight)
  },
  removeWeightFromPuppy: function(puppyId, weightId) {
    return axios.delete(`/api/puppies/${puppyId}/weight/${weightId}`)
  },
  addFurDescriptionToPuppy: function(puppyId, furDescription) {
    return axios.post(`/api/puppies/${puppyId}/furDescription`, furDescription)
  },
  findAllFurDescriptionsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/furDescription`)
  },
  updateFurDescriptionByPuppy: function(puppyId, furDescriptionId, furDescription) {
    return axios.put(`/api/puppies/${puppyId}/furDescription/${furDescriptionId}`, furDescription)
  },
  removeFurDescriptionFromPuppy: function(puppyId, furDescriptionId) {
    return axios.delete(`/api/puppies/${puppyId}/furDescription/${furDescriptionId}`)
  }
}