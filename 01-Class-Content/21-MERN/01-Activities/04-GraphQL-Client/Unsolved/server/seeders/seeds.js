const faker = require('faker');

const db = require('../config/connection');
const { Book } = require('../models');

db.once('open', async () => {
  await Book.deleteMany({});

  // create user data
  const bookData = [];

  for (let i = 0; i < 20; i++) {
    const title = faker.company.catchPhrase();
    const author = faker.name.findName();
    const pages = faker.random.number();

    bookData.push({ title, author, pages });
  }
  await Book.collection.insertMany(bookData);

  console.log('all done!');
  process.exit(0);
});
