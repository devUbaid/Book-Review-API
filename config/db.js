// MongoDB connection setup using Mongoose
const mongoose = require('mongoose');

// Connects to MongoDB using the URI from environment variables
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("DB Connection Failed", error);
    process.exit(1);// Exit process with failure code
  }
};
module.exports = connectDB;
