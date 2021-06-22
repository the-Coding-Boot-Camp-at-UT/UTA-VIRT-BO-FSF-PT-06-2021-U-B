// Dependencies
const Sequelize = require('sequelize');

// Creates mySQL connection using Sequelize
// Include your MySQL user/password information
const sequelize = process.env.JAWSDB_URL
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize('blogger', 'root', '', {
      host: 'localhost',
      port: 3306,
      dialect: 'mysql'
    });

// Exports the connection for other files to use
module.exports = sequelize;
