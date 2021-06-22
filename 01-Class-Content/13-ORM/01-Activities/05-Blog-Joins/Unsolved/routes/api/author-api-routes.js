const router = require('express').Router();
const db = require('../../models');

// Routes
// =============================================================

// Update query to "include" associated Posts
router.get('/', (req, res) => {
  db.Author.findAll({}).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

// Update query to "include" associated Posts
router.get('/:id', (req, res) => {
  db.Author.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.post('/', (req, res) => {
  db.Author.create(req.body).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

router.delete('/:id', (req, res) => {
  db.Author.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbAuthor => {
    res.json(dbAuthor);
  });
});

module.exports = router;
