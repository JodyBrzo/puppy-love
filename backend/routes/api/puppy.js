const router = require ("express").Router();
const puppyController  = require("../../controllers/puppyController");

router.route("/")
.get(puppyController.findAllpuppies) 

router.route("/add")
.post(puppyController.createPuppy);  

// router.route("/:puppyId")
// .get(puppyController.findPuppyById)  
// .put(puppyController.updatePuppyById)  
// .delete(puppyController.removePuppyById);  

// router.route("/:puppyId/temp")
// .get(puppyController.findAllTempsByPuppy) 
// .put(puppyController.updateTempByPuppy) 
// .post(puppyController.addTempToPuppy)  
// .delete(puppyController.removeTempFromPuppy);

// router.route("/:puppyId/weight")
// .get(puppyController.findAllWeightsByPuppy) 
// .put(puppyController.updateWeightByPuppy) 
// .post(puppyController.addWeightToPuppy)  
// .delete(puppyController.removeWeightFromPuppy);

// router.route("/:puppyId/furDescription")
// .get(puppyController.findAllfurDescriptionsByPuppy) 
// .put(puppyController.updatefurDescriptionByPuppy) 
// .post(puppyController.addfurDescriptionToPuppy)  
// .delete(puppyController.removefurDescriptionFromPuppy);

// router.route("/:puppyId/umbilicus")
// .get(puppyController.findAllUmbilicusesByPuppy) 
// .put(puppyController.updateUmbilicusByPuppy) 
// .post(puppyController.addUmbilicusToPuppy)  
// .delete(puppyController.removeUmbilicusFromPuppy);

// router.route("/:puppyId/eyes")
// .get(puppyController.findAllEyesByPuppy) 
// .put(puppyController.updateEyesByPuppy) 
// .post(puppyController.addEyesToPuppy)  
// .delete(puppyController.removeEyesFromPuppy);

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