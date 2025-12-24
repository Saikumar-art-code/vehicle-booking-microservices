const RiderService = require("../services/rider.service.js");
const { signToken } = require("../jwt/token");

class RiderController {
  static async signup(req, res, next) {
    try {
      const { name, mobileNo } = req.body;

      const rider = await RiderService.createRider({ name, mobileNo });

      res.status(201).json({
        status: true,
        data: {
          id: rider._id,
          name: rider.name,
          mobileNo: rider.mobileNo,
        },
      });
    } catch (err) {
      next(err);
    }
  }

  static async login(req, res, next) {
    try {
      const { mobileNo } = req.body;

      const rider = await RiderService.getByMobile(mobileNo);
      if (!rider) throw new Error("Rider not found");

      const token = signToken({
        riderId: rider._id,
        mobileNo: rider.mobileNo,
      });

      res.json({
        status: true,
        token,
        rider: {
          id: rider._id,
          name: rider.name,
          walletBalance: rider.walletBalance,
          onBoardingAmount: rider.onBoardingAmount,
          currentRentalPlan: rider.currentRentalPlan,
          isActiveRental: rider.isActiveRental,
        },
      });
    } catch (err) {
      next(err);
    }
  }
}

module.exports = RiderController;
