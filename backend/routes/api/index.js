const router = require("express").Router();
const puppyRoutes = require("./puppy");

//routes
router.use("/puppies", puppyRoutes);

module.exports = router;
