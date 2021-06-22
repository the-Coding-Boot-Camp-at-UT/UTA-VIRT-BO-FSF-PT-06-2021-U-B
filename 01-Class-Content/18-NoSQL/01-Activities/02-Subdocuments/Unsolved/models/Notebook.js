const { Schema, model } = require('mongoose');
const noteSchema = require('./Note');

const notebookSchema = new Schema({
  title: {
    type: String,
    trim: true,
    required: 'Title is Required',
  },

  createdAt: {
    type: Date,
    default: Date.now,
  },

  notes: [noteSchema],
});

const Notebook = model('Notebook', notebookSchema);

module.exports = Notebook;
