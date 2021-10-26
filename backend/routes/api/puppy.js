const router = require ("express").Router();
const puppyController  = require("../../controllers/puppyController");

router.route("/")
.get(puppyController.findAllpuppies) 

router.route("/add")
.post(puppyController.createPuppy);  

router.route("/:puppyId")
.get(puppyController.findPuppyById)  
.put(puppyController.updatePuppyById)  
.delete(puppyController.removePuppyById);  

router.route("/:puppyId/temp")
.get(puppyController.findAllTempsByPuppy) 
.post(puppyController.addTempToPuppy)  

router.route("/:puppyId/temp/:tempId")
.put(puppyController.updateTempByPuppy) 
.delete(puppyController.removeTempFromPuppy);

router.route("/:puppyId/weight")
.get(puppyController.findAllWeightsByPuppy) 
.post(puppyController.addWeightToPuppy)  

router.route("/:puppyId/weight/:weightId")
.put(puppyController.updateWeightByPuppy) 
.delete(puppyController.removeWeightFromPuppy);

router.route("/:puppyId/furDescription")
.get(puppyController.findAllFurDescriptionsByPuppy) 
.post(puppyController.addFurDescriptionToPuppy)  

router.route("/:puppyId/furDescription/:furDescriptionId")
.put(puppyController.updateFurDescriptionByPuppy) 
.delete(puppyController.removeFurDescriptionFromPuppy);

router.route("/:puppyId/umbilicus")
.get(puppyController.findAllUmbilicusByPuppy) 
.post(puppyController.addUmbilicusToPuppy)  

router.route("/:puppyId/umbilicus/:umbilicusId")
.put(puppyController.updateUmbilicusByPuppy) 
.delete(puppyController.removeUmbilicusFromPuppy);

router.route("/:puppyId/eye")
.get(puppyController.findAllEyesByPuppy)
.post(puppyController.addEyesToPuppy)  

router.route("/:puppyId/eye/:eyeId")
.put(puppyController.updateEyeByPuppy) 
.delete(puppyController.removeEyeFromPuppy);

// router.route("/:puppyId/ears")
// .get(puppyController.findAllEarsByPuppy) 
// .put(puppyController.updateEarsByPuppy) 
// .post(puppyController.addEarsToPuppy)  
// .delete(puppyController.removeEarsFromPuppy);

// router.route("/:puppyId/nails")
// .get(puppyController.findAllNailsByPuppy) 
// .put(puppyController.updateNailsByPuppy) 
// .post(puppyController.addNailsToPuppy)  
// .delete(puppyController.removeNailsFromPuppy);

// router.route("/:puppyId/medication")
// .get(puppyController.findAllMedicationsByPuppy) 
// .put(puppyController.updateMedicationByPuppy) 
// .post(puppyController.addMedicationToPuppy)  
// .delete(puppyController.removeMedicationFromPuppy);

// router.route("/:puppyId/milkSupplement")
// .get(puppyController.findAllMilkSupplementsByPuppy) 
// .put(puppyController.updateMilkSupplementByPuppy) 
// .post(puppyController.addMilkSupplementToPuppy)  
// .delete(puppyController.removeMilkSupplementFromPuppy);

// router.route("/:puppyId/vaccine")
// .get(puppyController.findAllVaccinesByPuppy) 
// .put(puppyController.updateVaccineByPuppy) 
// .post(puppyController.addVaccineToPuppy)  
// .delete(puppyController.removeVaccineFromPuppy);

// router.route("/:puppyId/vetCheck")
// .get(puppyController.findAllVetChecksByPuppy) 
// .put(puppyController.updateVetCheckByPuppy) 
// .post(puppyController.addVetCheckToPuppy)  
// .delete(puppyController.removeVetCheckFromPuppy);

// router.route("/:puppyId/notes")
// .get(puppyController.findAllNotesByPuppy) 
// .put(puppyController.updateNotesByPuppy) 
// .post(puppyController.addNotesToPuppy)  
// .delete(puppyController.removeNotesFromPuppy);

module.exports = router;