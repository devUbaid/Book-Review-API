// Handles book-related operations
const Book = require("../models/Book");
const Review = require("../models/Review");

// Adds a new book to the database
exports.addBook = async (req, res) => {
  const { title, author, genre, description } = req.body;
  const book = await Book.create({
    title,
    author,
    genre,
    description,
    addedBy: req.user._id,// Track which user added the book
  }); 
  res.status(201).json(book);
};

// Gets a paginated list of books with optional filtering
exports.getBooks = async (req, res) => {
  const { page = 1, limit = 10, author, genre } = req.query;
  const query = {};
  // Build query based on provided filters
  if (author) query.author = new RegExp(author, "i"); // Case-insensitive search
  if (genre) query.genre = genre;

  const books = await Book.find(query)
    .skip((page - 1) * limit) // Pagination offset
    .limit(parseInt(limit));// Number of items per page
  res.json(books);
};

// Gets detailed information about a specific book including reviews and average rating
exports.getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) return res.status(404).json({ message: "Book not found" });
// Get latest 10 reviews with user names
  const reviews = await Review.find({ book: book._id })
    .populate("user", "name")
    .limit(10);
  // Calculate average rating
  const avgRating = await Review.aggregate([
    { $match: { book: book._id } },
    { $group: { _id: "$book", avg: { $avg: "$rating" } } },
  ]);

  res.json({
    ...book.toObject(),
    averageRating: avgRating[0]?.avg || 0,
    reviews,
  });
};

// Searches books by title or author
// @query {string} q - Search query
exports.searchBooks = async (req, res) => {
  const { q } = req.query;
  const books = await Book.find({
    $or: [{ title: new RegExp(q, "i") }, 
      { author: new RegExp(q, "i") }],
  });
  res.json(books);
};
