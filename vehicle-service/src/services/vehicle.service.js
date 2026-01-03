const Vehicle = require("../models/vehicle.model");

class VehicleService {
  static async createVehicle({ vehicleUid }) {
    return Vehicle.create({
      vehicleUid,
      status: "ACTIVE",
      workingStatus: "READY_TO_MOVE",
      booking: { isBooked: false },
      riderId: null,
    });
  }

  static async getById(id) {
    const vehicle = await Vehicle.findById(id);
    if (!vehicle) throw new Error("Vehicle not found");
    return vehicle;
  }

  static async assignBooking({ vehicleId, riderId, rentalId }) {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) throw new Error("Vehicle not found");

    if (vehicle.workingStatus !== "READY_TO_MOVE") {
      throw new Error("Vehicle not available for booking");
    }

    vehicle.booking = {
      isBooked: true,
      riderId,
      rentalId,
      bookedAt: new Date(),
    };

    vehicle.workingStatus = "READY_TO_DEPLOY";
    await vehicle.save();

    return vehicle;
  }

  static async deploy({ vehicleId, riderId }) {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) throw new Error("Vehicle not found");

    vehicle.booking = null;
    vehicle.riderId = riderId;
    vehicle.workingStatus = "DEPLOYED";

    await vehicle.save();
    return vehicle;
  }
}

module.exports = VehicleService;
