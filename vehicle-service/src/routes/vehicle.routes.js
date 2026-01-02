const express = require("express");
const VehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

router.post("/", VehicleController.create);
router.get("/available", VehicleController.listAvailable);

module.exports = router; // ✅ THIS LINE IS CRITICAL
