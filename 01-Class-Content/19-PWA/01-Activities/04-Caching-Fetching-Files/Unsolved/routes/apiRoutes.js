const db = require('../models');

module.exports = app => {
  app.get('/api/images', (req, res) => {
    db.Image.find({}).then(dbImages => {
      res.json(dbImages);
    });
  });
};
