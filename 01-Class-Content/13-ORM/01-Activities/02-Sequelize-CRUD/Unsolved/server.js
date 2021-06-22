// Dependencies
// =============================================================
const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes/api-routes');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Requiring our models for syncing
const db = require('./models/todo');

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
app.use(routes);

// Syncing our sequelize models and then starting our Express app
// =============================================================
sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log('App listening on PORT ' + PORT);
  });
});
