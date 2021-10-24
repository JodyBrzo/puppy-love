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
    .findOneAndUpdate({_id: req.params.puppyId, "weights._id": req.params.tempId}, {$set: {"weights.$": req.body}}, {new: true})
    .then(dbModel => {
      if (dbModel === null){
        res.status(404).json({status:"Puppy weight or puppy not found."});
      }
      const temp = dbModel.temperatures.find(weight => weight._id.equals(mongoose.Types.ObjectId(req.params.weightId)));
      res.status(200).json(temp);
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

  }


}