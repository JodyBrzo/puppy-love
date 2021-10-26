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
  },
  addFurUmbilicusToPuppy: function(puppyId, furUmbilicus) {
    return axios.post(`/api/puppies/${puppyId}/furUmbilicus`, furUmbilicus)
  },
  findAllFurUmbilicusByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/furUmbilicus`)
  },
  updateFurUmbilicusByPuppy: function(puppyId, furUmbilicusId, furUmbilicus) {
    return axios.put(`/api/puppies/${puppyId}/furUmbilicus/${furUmbilicusId}`, furUmbilicus)
  },
  removeFurUmbilicusFromPuppy: function(puppyId, furUmbilicusId) {
    return axios.delete(`/api/puppies/${puppyId}/furUmbilicus/${furUmbilicusId}`)
  },
  addEyesToPuppy: function(puppyId, eye) {
    return axios.post(`/api/puppies/${puppyId}/eye`, eye)
  },
  findAllEyesByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/eye`)
  },
  updateEyeByPuppy: function(puppyId, eyeId, eye) {
    return axios.put(`/api/puppies/${puppyId}/eye/${eyeId}`, eye)
  },
  removeEyeFromPuppy: function(puppyId, eyeId) {
    return axios.delete(`/api/puppies/${puppyId}/eye/${eyeId}`)
  },
  addNailsToPuppy: function(puppyId, nail) {
    return axios.post(`/api/puppies/${puppyId}/nail`, nail)
  },
  findAllNailsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/nail`)
  },
  updateNailByPuppy: function(puppyId, nailId, nail) {
    return axios.put(`/api/puppies/${puppyId}/nail/${nailId}`, nail)
  },
  removeNailFromPuppy: function(puppyId, nailId) {
    return axios.delete(`/api/puppies/${puppyId}/nail/${nailId}`)
  },
  addMedicationToPuppy: function(puppyId, medication) {
    return axios.post(`/api/puppies/${puppyId}/medication`, medication)
  },
  findAllMedicationsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/medication`)
  },
  updateMedicationByPuppy: function(puppyId, medicationId, medication) {
    return axios.put(`/api/puppies/${puppyId}/medication/${medicationId}`, medication)
  },
  removeMedicationFromPuppy: function(puppyId, medicationId) {
    return axios.delete(`/api/puppies/${puppyId}/medication/${medicationId}`)
  },
  addMilkSupplementToPuppy: function(puppyId, milkSupplement) {
    return axios.post(`/api/puppies/${puppyId}/milkSupplement`, milkSupplement)
  },
  findAllMilkSupplementsByPuppy: function(puppyId) {
    return axios.get(`/api/puppies/${puppyId}/milkSupplement`)
  },
  updateMilkSupplementByPuppy: function(puppyId, milkSupplementId, milkSupplement) {
    return axios.put(`/api/puppies/${puppyId}/milkSupplement/${milkSupplementId}`, milkSupplement)
  },
  removeMilkSupplementFromPuppy: function(puppyId, milkSupplementId) {
    return axios.delete(`/api/puppies/${puppyId}/milkSupplement/${milkSupplementId}`)
  }
}