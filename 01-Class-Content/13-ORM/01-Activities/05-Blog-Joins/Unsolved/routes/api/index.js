const router = require('express').Router();
const authorRoutes = require('./author-api-routes');
const postRoutes = require('./post-api-routes');

router.use('/authors', authorRoutes);
router.use('/posts', postRoutes);

module.exports = router;
