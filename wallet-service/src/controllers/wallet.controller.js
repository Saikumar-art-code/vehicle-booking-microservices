const WalletService = require("../services/wallet.service");

class WalletController {
  static async debit(req, res, next) {
    try {
      const txn = await WalletService.debit(req.body);
      res.status(200).json({ status: true, data: txn });
    } catch (err) {
      next(err);
    }
  }

  static async credit(req, res, next) {
    try {
      const txn = await WalletService.credit(req.body);
      res.status(200).json({ status: true, data: txn });
    } catch (err) {
      next(err);
    }
  }

  static async balance(req, res, next) {
    try {
      const balance = await WalletService.getWalletBalance(req.params.riderId);
      res.json({ status: true, balance });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = WalletController;
