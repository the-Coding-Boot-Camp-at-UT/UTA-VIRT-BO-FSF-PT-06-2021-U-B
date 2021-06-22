// Dependencies
// =============================================================
const router = require('express').Router();
const Post = require('../models/post');

// Routes
// =============================================================

// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
  Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// GET route for retrieving posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
  // Retrieve all of the posts of a specific category
  // Return the posts as JSON
  //
  // YOUR CODE HERE
  //
});

// GET route for retrieving a single post
// We can get the id of the post from 'req.params.id'
router.get('/api/posts/:id', (req, res) => {
  // Retrieve a single post using the id from 'req.params.id'
  // Return the post as JSON
  //
  // YOUR CODE HERE
  //
});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
  // Create a new post with the data in 'req.body'
  // Return the new post as JSON
  //
  // YOUR CODE HERE
  //
});

// DELETE route for deleting a post
router.delete('/api/posts/:id', (req, res) => {
  // Delete a post using the id from 'req.params.id'
  // Return the result as JSON
  //
  // YOUR CODE HERE
  //
});

// PUT route for updating a post
router.put('/api/posts/:id', (req, res) => {
  // Update a post with the data in 'req.body'
  // Return the result as JSON
  //
  // YOUR CODE HERE
  //
});

module.exports = router;
