const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

// A user has been created already for our activity purposes
db.User.create({ name: 'Ernest Hemingway' })
  .then(dbUser => {
    console.log(dbUser);
  })
  .catch(({ message }) => {
    console.log(message);
  });

// Retrieve all notes
app.get('/notes', (req, res) => {
  db.Note.find({})
    .then(dbNote => {
      res.json(dbNote);
    })
    .catch(err => {
      res.json(err);
    });
});

// Retrieve all users
app.get('/user', (req, res) => {
  db.User.find({})
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

// Create a new note and associate it with user
app.post('/submit', ({ body }, res) => {
  db.Note.create(body)
    .then(({ _id }) =>
      db.User.findOneAndUpdate({}, { $push: { notes: _id } }, { new: true })
    )
    .then(dbUser => {
      res.json(dbUser);
    })
    .catch(err => {
      res.json(err);
    });
});

app.get('/populate', (req, res) => {
  // Write the query to `find()` all of the users from the User collection
  // and `populate()` them with any associated notes.
  // YOUR CODE HERE
  //
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
