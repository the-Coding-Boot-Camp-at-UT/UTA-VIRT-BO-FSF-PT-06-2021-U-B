const { User } = require('../models');
const { AuthenticationError } = require('apollo-server-express');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    }
  },
  Mutation: {
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('That user does not exist');
      }

      if (password !== user.password) {
        throw new AuthenticationError('Incorrect credentials');
      }
      return user;
    }
  }
};

module.exports = resolvers;
