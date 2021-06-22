const router = require('express').Router();
const apiRoutes = require('./api');
const htmlRoutes = require('./html/html-routes');

router.use('/', htmlRoutes);
router.use('/api', apiRoutes);

module.exports = router;
