const express = require("express");
const RiderController = require("../controllers/rider.controller");

const router = express.Router();

// signup (create rider)
router.post("/signup", RiderController.signup);

// login
router.post("/login", RiderController.login);

module.exports = router;
