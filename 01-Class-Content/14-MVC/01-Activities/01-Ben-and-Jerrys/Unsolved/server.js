// Dependencies
// =============================================================
const express = require('express');
const exphbs = require('express-handlebars');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Set Handlebars as the default template engine
//
// YOUR CODE HERE
//

// Data
// =============================================================
//
// Add your Dummy Data HERE
//

// Routes
// =============================================================

// GET route for getting all of the ice cream flavors
app.get('/', (req, res) => {
  res.render('all');
});

// Create a route for getting a specific ice cream flavor
//
// YOUR CODE HERE
//

// Starts the server to begin listening
// =============================================================
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
