const Post = require('./post');
const Author = require('./author');

// Create a relationship that instructs Posts to belong to Authors

// Create a relationship that instructs Authors that it has many Posts

module.exports = { Post, Author };
