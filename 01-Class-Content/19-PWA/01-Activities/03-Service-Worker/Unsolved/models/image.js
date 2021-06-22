const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const imageSchema = new Schema({
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: Number,
  date: { type: Date, default: Date.now }
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
