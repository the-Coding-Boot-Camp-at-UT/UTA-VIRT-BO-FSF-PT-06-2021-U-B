// Dependencies
// =============================================================

// Require the sequelize library
const { Model, DataTypes } = require('sequelize');
// Require the connection to the database (connection.js)
const sequelize = require('../config/connection');

// Create a "Book" model with a title, author, genre, and pages
class Book extends Model {}

Book.init(
  {
    title: DataTypes.STRING,
    author: DataTypes.STRING,
    genre: DataTypes.STRING,
    pages: DataTypes.INTEGER
  },
  {
    sequelize
  }
);

// Export the book model for other files to use
module.exports = Book;
