const Rental = require("../models/rental.model.js");
const Vehicle = require("../models/vehicle.model.js");
const WalletClient = require("../clients/wallet.client");

class BookingService {
  static async bookingPhaseOne({ riderId, vehicleId, plan }) {
    const vehicle = await Vehicle.findById(vehicleId);
    if (!vehicle) {
      throw new Error("vehicle not found");
    }
    if (vehicle.workingStatus !== "READY_TO_MOVE") {
      throw new Error("vehicle is not available booking");
    }
    await WalletClient.debit({
      riderId,
      amount: 200,
      type: "BOOKING",
    });

    const rental = await Rental.create({
      riderId,
      vehicleId,
      plan,
      bookingAmount: 200,
      bookingRequired: 200,
      obRequired: 2000,
      rentalRequired: plan.amount,
      bookingStatus: "RIDER_ASSIGNED",
      status: "RIDER_ASSIGNED",
    });

    vehicle.workingStatus = "READY_TO_DEPLOY";
    vehicle.booking = {
      isBooked: true,
      rentalId: rental._id,
      riderId,
      bookedAt: new Date(),
    };
    await vehicle.save();

    return {
      rentalId: rental._id,
      vehicleId: vehicle._id,
      workingStatus: vehicle.workingStatus,
    };
  }
}
module.exports = BookingService;
