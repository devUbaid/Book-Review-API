// Handles user authentication operations
const User = require("../models/User");
const generateToken = require("../utils/generateToken");
 
exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  // Check if user already exists
  if (await User.findOne({ email }))
    return res.status(400).json({ message: "Email already exists" });
 
  // Create new user and return token
  const user = await User.create({ name, email, password });
  res.status(201).json({ token: generateToken(user._id) });
};

// Authenticates an existing user
exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  // Verify user exists and password matches
  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  res.json({ token: generateToken(user._id) });
};
