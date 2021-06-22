const router = require('express').Router();
const db = require('../models');

// Routes
// =============================================================
// GET route for getting all of the posts
router.get('/api/posts/', (req, res) => {
  db.Post.findAll({}).then(dbPost => {
    res.json(dbPost);
  });
});

// Get route for returning posts of a specific category
router.get('/api/posts/category/:category', (req, res) => {
  db.Post.findAll({
    where: {
      category: req.params.category
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// Get route for retrieving a single post
router.get('/api/posts/:id', (req, res) => {
  db.Post.findOne({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// POST route for saving a new post
router.post('/api/posts', (req, res) => {
  console.log(req.body);
  db.Post.create({
    title: req.body.title,
    body: req.body.body,
    category: req.body.category
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// DELETE route for deleting posts
router.delete('/api/posts/:id', (req, res) => {
  db.Post.destroy({
    where: {
      id: req.params.id
    }
  }).then(dbPost => {
    res.json(dbPost);
  });
});

// PUT route for updating posts
router.put('/api/posts/:id', (req, res) => {
  db.Post.update(
    {
      title: req.body.title,
      body: req.body.body,
      category: req.body.category
    },
    {
      where: {
        id: req.params.id
      }
    }
  ).then(dbPost => {
    res.json(dbPost);
  });
});

module.exports = router;
