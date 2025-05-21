# Book Review API
A RESTful API for managing books and reviews with JWT authentication. Built with Node.js, Express, and MongoDB.

## Features

- ✅ User authentication (signup/login with JWT)
- 📚 CRUD operations for books
- ⭐ Add, update, and delete reviews
- 🔍 Search books by title/author
- 📖 Filter books by genre
- 📊 Average rating calculation
- ⏱️ Request rate limiting
- 📄 Pagination support

## Tech Stack

- **Backend**: Node.js, Express
- **Database**: MongoDB
- **Authentication**: JWT
- **Middleware**: CORS, body-parser
- **Environment**: Dotenv

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB Atlas account or local MongoDB instance
- Postman (for API testing)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/book-review-api.git
   cd book-review-api
2. Install dependencies:
   ```bash
   npm install
   
3. Create .env file:
   ```bash
   MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/book-review?retryWrites=true&w=majority
   JWT_SECRET=your_jwt_secret_key_here
   PORT=5000

4. Start the server:
   ```bash
   node server.js

5. ## API Documentation
   ### Base URL
   ```bash
   http://localhost:5000/api
   
## Project Structure:
  ```bash
 backend/
├── config/         # Database configuration
├── controllers/    # Route controllers
├── middlewares/    # Custom middleware
├── models/         # Mongoose models
├── routes/         # API routes
├── utils/          # Helper functions
├── .env            # Environment variables
├── server.js       # Main application file
