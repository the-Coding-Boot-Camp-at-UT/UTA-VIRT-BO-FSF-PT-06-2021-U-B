const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Todo extends Model {}

Todo.init(
  {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  },
  {
    sequelize
  }
);

module.exports = Todo;
