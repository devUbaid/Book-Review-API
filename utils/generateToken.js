const jwt = require("jsonwebtoken");

// Generates a JWT token for a user
const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",// Token expires in 7 days
  });
};

module.exports = generateToken;
