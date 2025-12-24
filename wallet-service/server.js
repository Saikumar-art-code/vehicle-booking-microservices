const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3002;

// connect DB first
connectDB();

// then start server
app.listen(PORT, () => {
  console.log(`Wallet service running on port ${PORT}`);
});
