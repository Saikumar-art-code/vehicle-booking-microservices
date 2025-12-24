const mongoose = require("mongoose");

const RiderSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    mobileNo: {
      type: String,
      required: true,
      unique: true,
    },
    walletBalance: {
      type: Number,
      default: 0,
    },
    currentRentalPlan: {
      type: String, // 1_DAY, 7_DAYS, 30_DAYS (later we can make enum)
      default: null,
    },
    isActiveRental: {
      type: Boolean,
      default: false,
    },
    onBoardingAmount: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true, // createdAt, updatedAt (AUTO)
  }
);

module.exports = mongoose.model("Rider", RiderSchema);
