const WalletTransaction = require("../models/walletTransaction.model.js");

class WalletService {
  // 1️⃣ Get latest wallet balance
  static async getWalletBalance(riderId) {
    const lastTxn = await WalletTransaction.findOne({ riderId }).sort({
      createdAt: -1,
    });

    return lastTxn ? lastTxn.balanceAfterTxn : 0;
  }

  // 2️⃣ CREDIT wallet (top-up)
  static async credit({ riderId, amount, type }) {
    const balanceBefore = await this.getWalletBalance(riderId);
    const balanceAfter = balanceBefore + amount;

    const txn = await WalletTransaction.create({
      riderId,
      amount,
      txnType: "CREDIT",
      type,
      balanceBeforeTxn: balanceBefore,
      balanceAfterTxn: balanceAfter,
    });

    return txn;
  }

  // 3️⃣ DEBIT wallet (booking / onboarding / rental)
  static async debit({ riderId, amount, type, rentalId = null }) {
    const balanceBefore = await this.getWalletBalance(riderId);

    if (balanceBefore < amount) {
      throw new Error("Insufficient wallet balance");
    }

    const balanceAfter = balanceBefore - amount;

    const txn = await WalletTransaction.create({
      riderId,
      rentalId,
      amount,
      txnType: "DEBIT",
      type,
      balanceBeforeTxn: balanceBefore,
      balanceAfterTxn: balanceAfter,
    });

    return txn;
  }
}

module.exports = WalletService;
