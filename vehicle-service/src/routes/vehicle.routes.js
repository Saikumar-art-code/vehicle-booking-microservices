const express = require("express");
const VehicleController = require("../controllers/vehicle.controller");

const router = express.Router();

// create vehicle
router.post("/", VehicleController.createVehicle);

// get vehicle by id
router.get("/:id", VehicleController.getVehicle);

// booking phase-1 (assign booking)
router.post("/:id/assign", VehicleController.assignBooking);

// booking phase-2 (deploy vehicle)
router.post("/:id/deploy", VehicleController.deploy);

module.exports = router;
