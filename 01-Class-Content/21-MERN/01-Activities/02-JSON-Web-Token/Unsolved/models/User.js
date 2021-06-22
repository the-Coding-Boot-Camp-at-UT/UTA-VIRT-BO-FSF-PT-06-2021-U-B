const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/.+@.+\..+/, 'Must match an email address!']
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  },
  job: {
    type: String,
    required: true
  },
  country: {
    type: String,
    required: true
  }
});

const User = model('User', UserSchema);

module.exports = User;
