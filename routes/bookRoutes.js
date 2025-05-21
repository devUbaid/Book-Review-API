const express = require("express");
const router = express.Router();
const protect = require("../middlewares/auth");
const {
  addBook, getBooks, getBookById, searchBooks,
} = require("../controllers/bookController");

// GET /api/books - Get paginated book list
router.get("/", getBooks);

// POST /api/books - Add new book
router.post("/", protect, addBook);

// GET /api/books/search - Search books by title or author
// @query {string} q - Search query
router.get("/search", searchBooks);

// GET /api/books/:id - Get book details by ID
// Includes reviews and average rating
router.get("/:id", getBookById);


module.exports = router;
