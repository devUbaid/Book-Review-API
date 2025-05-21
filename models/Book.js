const mongoose = require("mongoose");

const bookSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String },
  genre: { type: String },
  description: { type: String },
  addedBy: { type: mongoose.Schema.Types.ObjectId, ref: "User" },// Reference to User who added the book
}, { timestamps: true });

module.exports = mongoose.model("Book", bookSchema);
