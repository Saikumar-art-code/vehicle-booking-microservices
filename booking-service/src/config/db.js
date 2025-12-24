const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/booking-service");
    console.log("Booking DB connected");
  } catch (err) {
    console.error("Booking DB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
