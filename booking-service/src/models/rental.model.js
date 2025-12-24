const mongoose = require("mongoose");

const RentalSchema = new mongoose.Schema(
  {
    riderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },

    vehicleId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },

    plan: {
      type: {
        type: String, // DAY | WEEK | MONTH
        required: true,
      },
      value: {
        type: Number, // 1, 7, 30
        required: true,
      },
      amount: {
        type: Number,
        required: true,
      },
    },

    bookingStatus: {
      type: String,
      enum: ["RIDER_ASSIGNED", "BOOKED"],
      required: true,
    },

    status: {
      type: String,
      enum: ["ACTIVE", "ENDED"],
      default: "ACTIVE",
    },

    bookingAmount: {
      type: Number,
      required: true,
    },

    rentalAmount: {
      type: Number,
      required: true,
    },

    obRequired: {
      type: Number,
      required: true,
    },

    isBookingAmountPaid: {
      type: Boolean,
      default: false,
    },

    isOnBoardingPaid: {
      type: Boolean,
      default: false,
    },

    isRentalAmountPaid: {
      type: Boolean,
      default: false,
    },

    startDate: {
      type: Date,
      default: null,
    },

    expiryDate: {
      type: Date,
      default: null,
    },

    endDate: {
      type: Date,
      default: null,
    },

    return: {
      returnedOn: Date,
      reason: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Rental", RentalSchema);
