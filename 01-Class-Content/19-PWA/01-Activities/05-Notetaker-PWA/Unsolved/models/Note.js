const { Schema, model } = require('mongoose');

const NoteSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is Required'
  },

  note: {
    type: String,
    trim: true,
    required: 'Text is Required',
    minlength: 6
  },

  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Note = model('Note', NoteSchema);

module.exports = Note;
