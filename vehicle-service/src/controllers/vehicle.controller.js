const VehicleService = require("../services/vehicle.service");

class VehicleController {
  static async create(req, res, next) {
    try {
      const vehicle = await VehicleService.createVehicle(req.body);
      res.status(201).json({ status: true, data: vehicle });
    } catch (err) {
      next(err);
    }
  }

  static async listAvailable(req, res, next) {
    try {
      const vehicles = await VehicleService.getAvailableVehicles();
      res.json({ status: true, data: vehicles });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = VehicleController;
