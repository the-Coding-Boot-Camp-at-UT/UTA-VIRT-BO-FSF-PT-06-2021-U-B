const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  title: String,
  body: String
});

const Note = model('Note', NoteSchema);

module.exports = Note;
