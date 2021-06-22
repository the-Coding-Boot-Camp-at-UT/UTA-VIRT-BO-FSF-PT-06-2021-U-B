const { Schema, model } = require('mongoose');

const UserSchema = new Schema({
  // Add these four attributes to your schema: username, password, email, userCreated
  // YOUR CODE HERE
  //
});

const User = model('User', UserSchema);

module.exports = User;
