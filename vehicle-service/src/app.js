const express = require("express");
const vehicleRoutes = require("./routes/vehicle.routes");

const app = express();

app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.json({ status: "UP", service: "vehicle-service" });
});

app.use("/vehicles", vehicleRoutes);

module.exports = app;
