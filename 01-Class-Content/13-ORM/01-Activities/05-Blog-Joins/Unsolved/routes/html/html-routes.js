const router = require('express').Router();
const path = require('path');

// index route loads view.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/blog.html'));
});

// cms route loads cms.html
router.get('/cms', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/cms.html'));
});

// blog route loads blog.html
router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/blog.html'));
});

// authors route loads author-manager.html
router.get('/authors', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/author-manager.html'));
});

module.exports = router;
