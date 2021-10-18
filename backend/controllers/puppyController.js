const db = require("../models");

module.exports = {

  //Get all puppies.
  findAllpuppies: function(req, res){
    db.Puppy
      .find({})
      .then(dbModel =>{
        res.setHeader("Description", "Retrieved all puppies.");
        res.setHeader("X-Total-Count", dbModel.length);
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
    .catch(err => res.status(422).json(err));
  }
}