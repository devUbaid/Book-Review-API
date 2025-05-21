const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
  book: { type: mongoose.Schema.Types.ObjectId, ref: "Book" },// Reference to reviewed book
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" }, // Reference to reviewer
  rating: { type: Number, min: 1, max: 5 },// Rating between 1-5
  comment: { type: String },
}, { timestamps: true });

// Ensure a user can only review a book once
reviewSchema.index({ book: 1, user: 1 }, { unique: true });

module.exports = mongoose.model("Review", reviewSchema);
