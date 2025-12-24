const mongoose = require("mongoose");

const MONGO_URL =
  process.env.MONGO_URL || "mongodb://127.0.0.1:27017/wallet-service";

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Wallet DB connected");
  } catch (err) {
    console.error("Wallet DB connection failed");
    console.error(err);
    process.exit(1);
  }
};

module.exports = connectDB;
