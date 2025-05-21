//  Handles review-related operations
 const Review = require("../models/Review"); 

//  Adds a review for a book
exports.addReview = async (req, res) => {
  const { rating, comment } = req.body;
  const { id: bookId } = req.params;
  try {
    const review = await Review.create({
      user: req.user._id,
      book: bookId,
      rating,
      comment,
    });
    res.status(201).json(review);
  } catch (err) {
    // Unique index violation (user can only review a book once)
    res.status(400).json({ message: "You already reviewed this book" });
  }
};

// Updates an existing review
exports.updateReview = async (req, res) => {

  const review = await Review.findById(req.params.id);

  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }

  // Verify review exists and user is the owner
  if (!review || review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }

   // Update only provided fields
  review.rating = req.body.rating || review.rating;
  review.comment = req.body.comment || review.comment;
  await review.save();
  res.json(review);
};


// Deletes a review
exports.deleteReview = async (req, res) => {
  const review = await Review.findById(req.params.id);
  if (!review) {
    return res.status(404).json({ message: "Review not found" });
  }
  // Verify review exists and user is the owner
  if (!review || review.user.toString() !== req.user._id.toString()) {
    return res.status(403).json({ message: "Unauthorized" });
  }
  await review.deleteOne();
  res.json({ message: "Review deleted" });
};
