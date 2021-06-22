const router = require('express').Router();
var path = require('path');

// Routes
// =============================================================
// Each of the below routes just handles the HTML page that the user gets sent to.

// index route loads view.html
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/blog.html'));
});

router.get('/cms', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/cms.html'));
});

// blog route loads blog.html
router.get('/blog', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/blog.html'));
});

module.exports = router;
