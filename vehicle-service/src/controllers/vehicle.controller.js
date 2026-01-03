// src/controllers/vehicle.controller.js
const VehicleService = require("../services/vehicle.service");

class VehicleController {
  static async createVehicle(req, res, next) {
    try {
      const { vehicleUid } = req.body;

      const vehicle = await VehicleService.createVehicle({ vehicleUid });

      res.status(201).json({
        status: true,
        data: vehicle,
      });
    } catch (err) {
      next(err);
    }
  }
  static async getVehicle(req, res, next) {
    try {
      const vehicle = await VehicleService.getById(req.params.id);

      res.status(200).json({
        status: true,
        data: vehicle, // 🔥 THIS MUST EXIST
      });
    } catch (err) {
      next(err);
    }
  }

  static async assignBooking(req, res, next) {
    try {
      const { riderId, rentalId } = req.body;
      const vehicle = await VehicleService.assignBooking({
        vehicleId: req.params.id,
        riderId,
        rentalId,
      });

      res.json({ status: true, data: vehicle });
    } catch (err) {
      next(err);
    }
  }

  static async deploy(req, res, next) {
    try {
      const { riderId } = req.body;
      const vehicle = await VehicleService.deploy({
        vehicleId: req.params.id,
        riderId,
      });

      res.json({ status: true, data: vehicle });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VehicleController;
