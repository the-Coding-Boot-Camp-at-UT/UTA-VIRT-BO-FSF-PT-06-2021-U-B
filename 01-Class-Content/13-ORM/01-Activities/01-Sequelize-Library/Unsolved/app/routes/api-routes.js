// Dependencies
// =============================================================
const router = require('express').Router();
const { Op } = require('sequelize');
const Book = require('../models/book');

// Routes
// =============================================================

// Get all books
router.get('/books', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

// Get all books of a specific genre
router.get('/genres/:genre', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

// Get all books from a specific author
router.get('/authors/:author', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

// Get all "long" books (books 150 pages or more)
router.get('/books/length/long', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

// Get all "short" books (books 150 pages or less)
router.get('/books/length/short', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

module.exports = router;
