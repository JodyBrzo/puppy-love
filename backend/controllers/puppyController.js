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
  }

}