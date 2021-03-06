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
.get(puppyController.findTempByPuppy) 
.delete(puppyController.removeTempFromPuppy);

router.route("/:puppyId/weight")
.get(puppyController.findAllWeightsByPuppy) 
.post(puppyController.addWeightToPuppy)  

router.route("/:puppyId/weight/:weightId")
.put(puppyController.updateWeightByPuppy) 
.get(puppyController.findWeightByPuppy) 
.delete(puppyController.removeWeightFromPuppy);

router.route("/:puppyId/furDescription")
.get(puppyController.findAllFurDescriptionsByPuppy) 
.post(puppyController.addFurDescriptionToPuppy)  

router.route("/:puppyId/furDescription/:furDescriptionId")
.put(puppyController.updateFurDescriptionByPuppy) 
.get(puppyController.findFurDescriptionByPuppy) 
.delete(puppyController.removeFurDescriptionFromPuppy);

router.route("/:puppyId/umbilicus")
.get(puppyController.findAllUmbilicusByPuppy) 
.post(puppyController.addUmbilicusToPuppy)  

router.route("/:puppyId/umbilicus/:umbilicusId")
.put(puppyController.updateUmbilicusByPuppy) 
.get(puppyController.findUmbilicusByPuppy) 
.delete(puppyController.removeUmbilicusFromPuppy);

router.route("/:puppyId/eye")
.get(puppyController.findAllEyesByPuppy)
.post(puppyController.addEyesToPuppy)  

router.route("/:puppyId/eye/:eyeId")
.put(puppyController.updateEyeByPuppy) 
.get(puppyController.findEyeByPuppy) 
.delete(puppyController.removeEyeFromPuppy);

router.route("/:puppyId/ear")
.get(puppyController.findAllEarsByPuppy)
.post(puppyController.addEarToPuppy)  

router.route("/:puppyId/ear/:earId")
.put(puppyController.updateEarByPuppy) 
.get(puppyController.findEarByPuppy) 
.delete(puppyController.removeEarFromPuppy);

router.route("/:puppyId/nail")
.get(puppyController.findAllNailsByPuppy)
.post(puppyController.addNailToPuppy)  

router.route("/:puppyId/nail/:nailId")
.put(puppyController.updateNailByPuppy) 
.get(puppyController.findNailByPuppy) 
.delete(puppyController.removeNailFromPuppy);

router.route("/:puppyId/medication")
.get(puppyController.findAllMedicationsByPuppy)
.post(puppyController.addMedicationToPuppy)  

router.route("/:puppyId/medication/:medicationId")
.put(puppyController.updateMedicationByPuppy) 
.get(puppyController.findMedicationByPuppy) 
.delete(puppyController.removeMedicationFromPuppy);

router.route("/:puppyId/milkSupplement")
.get(puppyController.findAllMilkSupplementsByPuppy) 
.post(puppyController.addMilkSupplementToPuppy) 

router.route("/:puppyId/milkSupplement/:milkSupplementId")
.put(puppyController.updateMilkSupplementByPuppy)
.get(puppyController.findMilkSupplementByPuppy) 
.delete(puppyController.removeMilkSupplementFromPuppy);

router.route("/:puppyId/vaccine")
.post(puppyController.addVaccineToPuppy) 
.get(puppyController.findAllVaccinesByPuppy) 

router.route("/:puppyId/vaccine/:vaccineId")
.put(puppyController.updateVaccineByPuppy) 
.get(puppyController.findVaccineByPuppy) 
.delete(puppyController.removeVaccineFromPuppy);

router.route("/:puppyId/vetCheck")
.post(puppyController.addVetCheckToPuppy)  
.get(puppyController.findAllVetChecksByPuppy) 

router.route("/:puppyId/vetCheck/:vetCheckId")
.put(puppyController.updateVetCheckByPuppy) 
.get(puppyController.findVetCheckByPuppy) 
.delete(puppyController.removeVetCheckFromPuppy);

router.route("/:puppyId/note")
.post(puppyController.addNoteToPuppy)  
.get(puppyController.findAllNotesByPuppy) 

router.route("/:puppyId/note/:noteId")
.put(puppyController.updateNoteByPuppy) 
.get(puppyController.findNoteByPuppy) 
.delete(puppyController.removeNoteFromPuppy);

module.exports = router;