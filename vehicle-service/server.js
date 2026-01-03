const app = require("./src/app");
const connectDB = require("./src/config/db");

const PORT = process.env.PORT || 3004;

connectDB();

app.listen(PORT, () => {
  console.log(`Vehicle service running on port ${PORT}`);
});
