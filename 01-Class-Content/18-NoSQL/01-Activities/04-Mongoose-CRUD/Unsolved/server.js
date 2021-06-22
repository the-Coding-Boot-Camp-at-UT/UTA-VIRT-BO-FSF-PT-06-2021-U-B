const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3001;

const { Note } = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/Notedb', {
  useFindAndModify: false,
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.set('useCreateIndex', true);
mongoose.set('debug', true);

app.post('/submit', ({ body }, res) => {
  // Use the `create()` method to create a new note using the data in `body`
  // YOUR CODE HERE
  //
});

app.get('/all', (req, res) => {
  // Use the `find()` method to get all of the notes in the database's collection
  // YOUR CODE HERE
  //
});

app.post('/update/:id', ({ params, body }, res) => {
  // Use the `findOneAndUpdate()` method to update a note using the `_id` and data from the `body`
  // If there is no note with that `id` in the collection, return an error message.
  // YOUR CODE HERE
  //
});

app.delete('/delete/:id', ({ params }, res) => {
  // Use the `findOneAndDelete()` method to delete a note using the `_id`
  // If there is no note with that `id` in the collection, return an error message.
  // YOUR CODE HERE
  //
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
