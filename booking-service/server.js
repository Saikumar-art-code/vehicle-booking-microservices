const app = require("./src/app.js");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3003;

// 🔥 DB FIRST
connectDB();

// 🔥 THEN SERVER
app.listen(PORT, () => {
  console.log(`Booking service running on port ${PORT}`);
});

