// src/models/vehicle.model.js
const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema(
  {
    vehicleUid: {
      type: String,
      required: true,
      unique: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "INACTIVE"],
      default: "ACTIVE",
    },

    workingStatus: {
      type: String,
      enum: ["READY_TO_MOVE", "READY_TO_DEPLOY", "DEPLOYED"],
      default: "READY_TO_MOVE",
    },

    riderId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    booking: {
      isBooked: { type: Boolean, default: false },
      rentalId: { type: mongoose.Schema.Types.ObjectId },
      riderId: { type: mongoose.Schema.Types.ObjectId },
      bookedAt: { type: Date },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Vehicle", VehicleSchema);
