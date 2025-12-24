const mongoose = require("mongoose");

const WalletTransactionSchema = new mongoose.Schema(
  {
    riderId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      index: true,
    },
    rentalId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },

    amount: {
      type: Number,
      required: true,
      min: 1,
    },

    txnType: {
      type: String,
      enum: ["CREDIT", "DEBIT"],
      required: true,
    },

    type: {
      type: String,
      enum: [
        "WALLET_CREDIT",
        "BOOKING",
        "ONBOARDING",
        "PRE_RENTAL_PLAN",
        "RENTAL_EXTEND_PLAN",
      ],
      required: true,
    },
    balanceBeforeTxn: {
      type: Number,
      required: true,
    },

    balanceAfterTxn: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("WalletTransaction", WalletTransactionSchema);
