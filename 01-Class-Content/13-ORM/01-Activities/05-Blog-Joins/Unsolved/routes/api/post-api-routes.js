const router = require('express').Router();
const db = require('../../models');

// Routes
// =============================================================

// Update query to "include" associated Author
router.get('/', (req, res) => {
  const query = {};
  if (req.query.author_id) {
    query.AuthorId = req.query.author_id;
  }

  db.Post.findAll({
    where: query
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// Update query to "include" associated Author
router.get('/:id', (req, res) => {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.post('/', (req, res) => {
  console.log(req.body);
  db.Post.create(req.body).then(dbPost => {
    res.json(dbPost);
  });
});

router.delete('/:id', (req, res) => {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

router.put('/', (req, res) => {
  db.Post.update(req.body, {
    where: {
      id: req.body.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
