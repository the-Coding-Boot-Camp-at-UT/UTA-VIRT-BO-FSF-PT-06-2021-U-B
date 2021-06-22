// Dependencies
// ===========================================================
const express = require('express');

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
    role: 'Jedi Master',
    age: 55,
    forcePoints: 1350
  }
];

// Routes
// ===========================================================
app.get('/', (req, res) => {
  res.send('Welcome to the Star Wars Page!');
});

app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }
  return res.send('No character found');
});

// Create a POST route that adds new characters
//
// YOUR CODE HERE
//

// Listener
// ===========================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
