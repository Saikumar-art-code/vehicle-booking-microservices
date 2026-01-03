const Rental = require("../models/rental.model");
const VehicleClient = require("../clients/vehicle.client");
const WalletClient = require("../clients/wallet.client");
const RiderClient = require("../clients/rider.client");

class BookingService {
  static async bookingPhaseOne({ riderId, vehicleId, plan }) {
    const existingRental = await Rental.findOne({
      riderId,
      status: "ACTIVE",
    });

    if (existingRental) {
      throw new Error("Rider already has an active rental");
    }

    // 1️⃣ get vehicle
    const vehicle = await VehicleClient.getById(vehicleId);

    if (vehicle.workingStatus !== "READY_TO_MOVE") {
      throw new Error("Vehicle not available for booking");
    }

    // 2️⃣ debit wallet
    await WalletClient.debit({
      riderId,
      amount: 200,
      type: "BOOKING",
    });

    // 3️⃣ create rental
    const rental = await Rental.create({
      riderId,
      vehicleId,
      plan,
      bookingAmount: 200,
      rentalAmount: plan.amount,
      obRequired: 2000,
      bookingStatus: "RIDER_ASSIGNED",
    });
    console.log("rental created", rental._id);

    // 4️⃣ assign vehicle
    await VehicleClient.assignBooking({
      vehicleId,
      riderId,
      rentalId: rental._id,
    });

    return {
      rentalId: rental._id,
      vehicleId,
      bookingStatus: "RIDER_ASSIGNED",
    };
  }
}

module.exports = BookingService;
