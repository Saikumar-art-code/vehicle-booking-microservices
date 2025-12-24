const BookingService = require("../services/booking.service.js");

class BookingController {
  static async bookingPhaseOne(req, res, next) {
    try {
      const result = await BookingService.bookingPhaseOne(req.body);
      return res.status(200).json({
        status: true,
        message: "booking amount paid successfully",
        data: result,
      });
    } catch (error) {
      next(error);
    }
  }
}
module.exports = BookingController;
