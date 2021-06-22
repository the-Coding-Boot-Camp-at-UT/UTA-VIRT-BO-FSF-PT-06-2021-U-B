const router = require('express').Router();

router.use(require('./animalRoutes'));
router.use(require('./zookeeperRoutes'));

module.exports = router;
