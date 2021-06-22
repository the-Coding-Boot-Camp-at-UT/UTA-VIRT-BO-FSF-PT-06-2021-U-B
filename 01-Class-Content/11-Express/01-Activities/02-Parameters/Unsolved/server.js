// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Data
// ===========================================================
const characters = [
  {
    routeName: 'yoda',
    name: 'Yoda',
    role: 'Jedi Master',
    age: 900,
    forcePoints: 2000
  },
  {
    routeName: 'darthmaul',
    name: 'Darth Maul',
    role: 'Sith Lord',
    age: 200,
    forcePoints: 1200
  },
  {
    routeName: 'obiwankenobi',
    name: 'Obi Wan Kenobi',
    role: 'Jedi Knight',
    age: 60,
    forcePoints: 1350
  }
];

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

// Create a GET route `/api/characters` that returns all of the characters
//
// YOUR CODE HERE
//

// Create just one GET route that returns any given specific character
// Iterate through the characters' routeNames to check if it matches `req.params.character`
// If there is no such character, send back a message "No character found"
//
// YOUR CODE HERE
//

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
