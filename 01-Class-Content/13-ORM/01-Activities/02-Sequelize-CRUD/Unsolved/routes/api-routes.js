// Dependencies
// =============================================================
const router = require('express').Router();
const Todo = require('../models/todo');

// Routes
// =============================================================

// GET route for getting all of the todos
router.get('/api/todos', (req, res) => {
  // Retrieve all of the todos from the database
  // Return the todos as JSON
  //
  // YOUR CODE HERE
  //
});

// POST route for saving a new todo
router.post('/api/todos', (req, res) => {
  // Create a new todo with the data in 'req.body'
  // Return the new todo as JSON
  //
  // YOUR CODE HERE
  //
});

// DELETE route for deleting a todo
router.delete('/api/todos/:id', (req, res) => {
  // Delete a todo using the id from 'req.params.id'
  // Return the result as JSON
  //
  // YOUR CODE HERE
  //
});

// PUT route for updating a todo
router.put('/api/todos/:id', (req, res) => {
  // Update a todo with the data in 'req.body'
  // Return the result as JSON
  //
  // YOUR CODE HERE
  //
});

module.exports = router;
