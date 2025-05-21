const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth");
const { updateReview, deleteReview, addReview } = require("../controllers/reviewController");


// All routes protected by authentication middleware
router.use(protect);

// POST /api/reviews/:id/reviews - Add review for a book
router.post("/:id/reviews", addReview);

// PUT /api/reviews/:id - Update existing review
router.put("/:id", updateReview);

// DELETE /api/reviews/:id - Delete review
router.delete("/:id", deleteReview);

module.exports = router;
