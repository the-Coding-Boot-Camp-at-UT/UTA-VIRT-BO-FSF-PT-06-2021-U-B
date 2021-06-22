const router = require('express').Router();
const path = require('path');

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pizza-list.html'));
});

router.get('/add-pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/add-pizza.html'));
});

router.get('/pizza', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public/pizza.html'));
});

module.exports = router;
