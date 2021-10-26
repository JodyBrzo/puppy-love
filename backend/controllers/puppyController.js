const db = require("../models");
const mongoose = require("mongoose");

module.exports = {

  handleError: function(err) {
    console.log(err.message, err.code)
    let errors = {name: '', gender: '', mother: '', father: '', birthDate: ''};
    if (err.message.includes('user validation failed')){
      Object.values(err.errors).forEach(({properties}) => {
        errors[properties.path] = properties.message;
      })
    }
    return errors;
  },

  //Get all puppies.
  findAllpuppies: function(req, res){
    db.Puppy
      .find({}) 
      .sort({createdAt: -1})
      .then(dbModel =>{
        res.setHeader("Description", "Retrieved all puppies.");
        res.status(200).json(dbModel);
      })
      .catch(err => {
        res.status(422).json(err);
      });
  },

  //Add a puppy
  createPuppy: function(req, res){
    db.Puppy
    .create(req.body)
    .then(dbModel => res.status(200).json(dbModel))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
      });
  },

  findPuppyById: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => res.status(200).json(dbModel))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updatePuppyById: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, req.body)
    .then(dbModel => res.status(200).json(dbModel))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  removePuppyById: function(req, res){
    db.Puppy
    .findOneAndDelete({_id: req.params.puppyId})
    .then(() => res.json('Puppy deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });

  }, 
  addTempToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'temperatures': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.temperatures.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findTempByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const temp = dbModel.temperatures.find(temp => temp._id.equals(mongoose.Types.ObjectId(req.params.tempId)));
      res.status(200).json(temp);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllTempsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.temperatures);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateTempByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "temperatures._id": req.params.tempId}, {$set: {"temperatures.$": req.body}}, {new: true})
    // .then(dbModel => res.status(200).json(dbModel))

    
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy temp or puppy not found."});
      }
      const temp = dbModel.temperatures.find(temp => temp._id.equals(mongoose.Types.ObjectId(req.params.tempId)));
      res.status(200).json(temp);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeTempFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'temperatures': {'_id': req.params.tempId}}})
    .then(() => res.json('Puppy temperature deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addWeightToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'weights': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.weights.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllWeightsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.weights);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findWeightByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const weight = dbModel.weights.find(weight => weight._id.equals(mongoose.Types.ObjectId(req.params.weightId)));
      res.status(200).json(weight);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateWeightByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "weights._id": req.params.weightId}, {$set: {"weights.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy weight or puppy not found."});
      }
      const weight = dbModel.weights.find(weight => weight._id.equals(mongoose.Types.ObjectId(req.params.weightId)));
      res.status(200).json(weight);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeWeightFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'weights': {'_id': req.params.tempId}}})
    .then(() => res.json('Puppy weight deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addFurDescriptionToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'furDescriptions': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.furDescriptions.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllFurDescriptionsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.furDescriptions);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findFurDescriptionByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const furDescription = dbModel.furDescriptions.find(furDescription => furDescription._id.equals(mongoose.Types.ObjectId(req.params.furDescriptionId)));
      res.status(200).json(furDescription);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateFurDescriptionByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "furDescriptions._id": req.params.furDescriptionId}, {$set: {"furDescriptions.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy furDescription or puppy not found."});
      }
      const furDescription = dbModel.furDescriptions.find(furDescription => furDescription._id.equals(mongoose.Types.ObjectId(req.params.furDescriptionId)));
      res.status(200).json(furDescription);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeFurDescriptionFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'furDescriptions': {'_id': req.params.tempId}}})
    .then(() => res.json('Puppy furDescription deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addUmbilicusToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'umbilicus': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.umbilicus.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllUmbilicusByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.umbilicus);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findUmbilicusByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const umbilicus = dbModel.umbilicus.find(umbilicus => umbilicus._id.equals(mongoose.Types.ObjectId(req.params.umbilicusId)));
      res.status(200).json(umbilicus);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateUmbilicusByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "umbilicus._id": req.params.umbilicusId}, {$set: {"umbilicus.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy umbilicus or puppy not found."});
      }
      const umbilicus = dbModel.umbilicus.find(umbilicus => umbilicus._id.equals(mongoose.Types.ObjectId(req.params.umbilicusId)));
      res.status(200).json(umbilicus);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeUmbilicusFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'umbilicus': {'_id': req.params.umbilicusId}}})
    .then(() => res.json('Puppy umbilicus deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addEyesToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'eyes': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.eyes.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllEyesByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.eyes);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findEyeByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const eye = dbModel.eyes.find(eye => eye._id.equals(mongoose.Types.ObjectId(req.params.eyeId)));
      res.status(200).json(eye);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateEyeByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "eyes._id": req.params.eyeId}, {$set: {"eyes.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy eye or puppy not found."});
      }
      const eye = dbModel.eyes.find(eye => eye._id.equals(mongoose.Types.ObjectId(req.params.eyeId)));
      res.status(200).json(eye);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeEyeFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'eyes': {'_id': req.params.tempId}}})
    .then(() => res.json('Puppy eye deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addEarToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'ears': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.ears.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllEarsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.ears);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findEarByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const ear = dbModel.ears.find(ear => ear._id.equals(mongoose.Types.ObjectId(req.params.earId)));
      res.status(200).json(ear);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateEarByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "ears._id": req.params.earId}, {$set: {"ears.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy ear or puppy not found."});
      }
      const ear = dbModel.ears.find(ear => ear._id.equals(mongoose.Types.ObjectId(req.params.earId)));
      res.status(200).json(ear);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeEarFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'ears': {'_id': req.params.tempId}}})
    .then(() => res.json('Puppy ear deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addNailToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'nails': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.nails.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllNailsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.nails);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findNailByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const nail = dbModel.nails.find(nail => nail._id.equals(mongoose.Types.ObjectId(req.params.nailId)));
      res.status(200).json(nail);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateNailByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "nails._id": req.params.nailId}, {$set: {"nails.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy nail or puppy not found."});
      }
      const nail = dbModel.nails.find(nail => nail._id.equals(mongoose.Types.ObjectId(req.params.nailId)));
      res.status(200).json(nail);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeNailFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'nails': {'_id': req.params.nailId}}})
    .then(() => res.json('Puppy nail deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addMedicationToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'medications': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.medications.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllMedicationsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.medications);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findMedicationByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const medication = dbModel.medications.find(medication => medication._id.equals(mongoose.Types.ObjectId(req.params.medicationId)));
      res.status(200).json(medication);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateMedicationByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "medications._id": req.params.medicationId}, {$set: {"medications.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy medication or puppy not found."});
      }
      const medication = dbModel.medications.find(medication => medication._id.equals(mongoose.Types.ObjectId(req.params.medicationId)));
      res.status(200).json(medication);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeMedicationFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'medications': {'_id': req.params.medicationId}}})
    .then(() => res.json('Puppy medication deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addMilkSupplementToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'milkSupplements': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.milkSupplements.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllMilkSupplementsByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.milkSupplements);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findMilkSupplementByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const milkSupplement = dbModel.milkSupplements.find(milkSupplement => milkSupplement._id.equals(mongoose.Types.ObjectId(req.params.milkSupplementId)));
      res.status(200).json(milkSupplement);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateMilkSupplementByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "milkSupplements._id": req.params.milkSupplementId}, {$set: {"milkSupplements.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy milkSupplement or puppy not found."});
      }
      const milkSupplement = dbModel.milkSupplements.find(milkSupplement => milkSupplement._id.equals(mongoose.Types.ObjectId(req.params.milkSupplementId)));
      res.status(200).json(milkSupplement);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeMilkSupplementFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'milkSupplements': {'_id': req.params.milkSupplementId}}})
    .then(() => res.json('Puppy milkSupplement deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addVaccineToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'vaccines': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.vaccines.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllVaccinesByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.vaccines);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findVaccineByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const vaccine = dbModel.vaccines.find(vaccine => vaccine._id.equals(mongoose.Types.ObjectId(req.params.vaccineId)));
      res.status(200).json(vaccine);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateVaccineByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "vaccines._id": req.params.vaccineId}, {$set: {"vaccines.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy vaccine or puppy not found."});
      }
      const vaccine = dbModel.vaccines.find(vaccine => vaccine._id.equals(mongoose.Types.ObjectId(req.params.vaccineId)));
      res.status(200).json(vaccine);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeVaccineFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'vaccines': {'_id': req.params.vaccineId}}})
    .then(() => res.json('Puppy vaccine deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addVetCheckToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'vetChecks': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.vetChecks.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllVetChecksByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.vetChecks);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findVetCheckByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const vetCheck = dbModel.vetChecks.find(vetCheck => vetCheck._id.equals(mongoose.Types.ObjectId(req.params.vetCheckId)));
      res.status(200).json(vetCheck);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateVetCheckByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "vetChecks._id": req.params.vetCheckId}, {$set: {"vetChecks.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy vetCheck or puppy not found."});
      }
      const vetCheck = dbModel.vetChecks.find(vetCheck => vetCheck._id.equals(mongoose.Types.ObjectId(req.params.vetCheckId)));
      res.status(200).json(vetCheck);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeVetCheckFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'vetChecks': {'_id': req.params.vetCheckId}}})
    .then(() => res.json('Puppy vetCheck deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  addNoteToPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$push: {'notes': req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.notes.slice(-1));
    })
      .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findAllNotesByPuppy: function(req, res){
    db.Puppy
    .findOne({_id: req.params.puppyId})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      res.status(200).json(dbModel.notes);
      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  findNoteByPuppy: function(req, res){
    db.Puppy
    .findById(req.params.puppyId)
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy not found."});
      }
      const note = dbModel.notes.find(note => note._id.equals(mongoose.Types.ObjectId(req.params.noteId)));
      res.status(200).json(note);      })
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  },
  updateNoteByPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId, "notes._id": req.params.noteId}, {$set: {"notes.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy note or puppy not found."});
      }
      const note = dbModel.notes.find(note => note._id.equals(mongoose.Types.ObjectId(req.params.noteId)));
      res.status(200).json(note);
      })
    .catch(err => {
      console.log(err);
      res.status(422).json({status: "Invalid puppy data sent to server."});
    });
  },
  removeNoteFromPuppy: function(req, res){
    db.Puppy
    .findOneAndUpdate({_id: req.params.puppyId}, {$pull: {'notes': {'_id': req.params.noteId}}})
    .then(() => res.json('Puppy note deleted!'))
    .catch(err => {
      const errors = module.exports.handleError(err)
      res.status(422).json({errors})
    });
  }
}