const express = require("express");
const walletRoutes = require("./routes/wallet.routes");

const app = express();

app.use(express.json());

// routes MUST be before server starts
app.use("/wallet", walletRoutes);

module.exports = app;
