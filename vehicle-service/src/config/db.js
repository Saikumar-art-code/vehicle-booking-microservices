const mongoose = require("mongoose");

const MONGO_URI = "mongodb://127.0.0.1:27017/vehicle_service";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI);
    console.log("Vehicle DB connected");
  } catch (err) {
    console.error("Vehicle DB connection failed", err);
    process.exit(1);
  }
};

module.exports = connectDB;
