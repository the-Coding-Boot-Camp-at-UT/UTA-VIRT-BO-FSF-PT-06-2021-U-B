// Dependencies
// =============================================================
const express = require('express');
// Import the 'path' module HERE
//

const app = express();
const PORT = 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Data
// =============================================================
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
// =============================================================

// Update the home route to return `index.html`
app.get('/', (req, res) => {
  //
  // YOUR CODE HERE
  //
});

app.get('/api/characters', (req, res) => {
  return res.json(characters);
});

app.get('/api/characters/:character', (req, res) => {
  const chosen = req.params.character;

  console.log(chosen);

  for (let i = 0; i < characters.length; i++) {
    if (chosen === characters[i].routeName) {
      return res.json(characters[i]);
    }
  }

  return res.json(false);
});

app.post('/api/characters', (req, res) => {
  const newCharacter = req.body;

  console.log(newCharacter);

  characters.push(newCharacter);

  res.json(newCharacter);
});

// Listener
// =============================================================
app.listen(PORT, () => {
  console.log(`App listening on PORT ${PORT}`);
});
