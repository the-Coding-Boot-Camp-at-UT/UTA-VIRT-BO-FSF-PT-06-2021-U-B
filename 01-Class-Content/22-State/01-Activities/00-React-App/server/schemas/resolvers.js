const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return await Book.find();
    },
  },
};

module.exports = resolvers;
