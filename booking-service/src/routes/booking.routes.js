const router = require("express").Router();
const BookingController = require("../controllers/booking.controller");

router.post("/phase-1", BookingController.bookingPhaseOne);

module.exports = router;
