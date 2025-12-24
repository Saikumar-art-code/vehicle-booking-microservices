const app = require("./src/app");
const connectDB = require("./src/config/db.js");

const PORT = 3001;

connectDB();

app.listen(PORT, () => {
  console.log(`Auth service running on port ${PORT}`);
});
