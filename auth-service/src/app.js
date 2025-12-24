const express = require("express");

const riderRoutes = require("./routes/rider.routes");
const errorHandler = require("./middleware/error");

const app = express();

// middleware
app.use(express.json());

// health check
app.get("/health", (req, res) => {
  res.status(200).json({
    status: "UP",
    service: "auth-service",
    time: new Date(),
  });
});

// routes
app.use("/riders", riderRoutes);

app.use(errorHandler);

module.exports = app;
