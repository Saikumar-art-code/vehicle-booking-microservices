const express = require("express");
const bookingRoutes = require("./routes/booking.routes");

const app = express();
app.use(express.json());

app.use("/bookings", bookingRoutes);

module.exports = app;
