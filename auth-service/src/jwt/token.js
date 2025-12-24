const jwt = require("jsonwebtoken");

const JWT_SECRET = "auth-secret"; // later move to env

exports.signToken = (payload) => {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
};

exports.verifyToken = (token) => {
  return jwt.verify(token, JWT_SECRET);
};
