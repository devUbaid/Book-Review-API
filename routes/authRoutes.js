const express = require('express');
const { signup, login } = require('../controllers/authController');
const router = express.Router();

// POST /api/auth/signup - Create new user account
router.post('/signup', signup);

// POST /api/auth/login - Authenticate existing user
router.post('/login', login);

module.exports = router;