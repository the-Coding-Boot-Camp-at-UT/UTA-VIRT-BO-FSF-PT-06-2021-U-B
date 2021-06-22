const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    }
  }
};

module.exports = resolvers;
