const express = require("express");
const vehicleRoutes = require("./routes/vehicle.routes");

const app = express();

app.use(express.json());
app.use("/vehicles", vehicleRoutes); // vehicleRoutes MUST be a function

module.exports = app;
