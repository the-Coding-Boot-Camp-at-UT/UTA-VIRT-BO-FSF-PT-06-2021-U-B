const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Author extends Model {}

Author.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  },
  {
    sequelize
  }
);

module.exports = Author;
