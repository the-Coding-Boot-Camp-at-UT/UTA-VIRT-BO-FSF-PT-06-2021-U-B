// Dependencies
// =============================================================
const express = require('express');
const sequelize = require('./config/connection');

// Sets up the Express App
// =============================================================
const app = express();
const PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Routes
// =============================================================
app.use(require('./routes/api-routes'));
app.use(require('./routes/html-routes'));

// Starts the server to begin listening
// =============================================================
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, function() {
    console.log('App listening on PORT ' + PORT);
  });
});
