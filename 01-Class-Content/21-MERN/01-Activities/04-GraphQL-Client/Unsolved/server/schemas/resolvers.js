const { Book } = require('../models');

const resolvers = {
  Query: {
    books: async () => {
      return Book.find();
    },
    book: async (parent, { title }) => {
      return Book.findOne({ title });
    }
  },
  Mutation: {
    addBook: async (parent, args) => {
      const book = await Book.create(args);
      return book;
    }
  }
};

module.exports = resolvers;
