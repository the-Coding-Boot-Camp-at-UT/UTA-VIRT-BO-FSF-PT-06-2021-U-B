const Book = require('../models/book');
const sequelize = require('../config/connection');

const bookdata = [
  {
    title: 'Pachinko',
    author: 'Min Jin Lee',
    genre: 'Fiction',
    pages: 496
  },
  {
    title: 'A Girl Like That',
    author: 'Tanaz Bhatena',
    genre: 'Fiction',
    pages: 384
  },
  {
    title: 'How the Garcia Girls Lost Their Accents',
    author: 'Julia Alvarez',
    genre: 'Fiction',
    pages: 336
  },
  {
    title: 'Saving Ruby King: A Novel',
    author: 'Catherine Adel West',
    genre: 'Fiction',
    pages: 284
  }
];

sequelize
  .sync({ force: true })
  .then(() => {
    return Book.bulkCreate(bookdata);
  })
  .then(dbBookData => {
    console.log('Books seeded!');
    process.exit(0);
  })
  .catch(err => {
    console.log(err);
    process.exit(1);
  });
