const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    author: String
    pages: Int
  }

  type Query {
    books: [Book]
    book(title: String!): Book
  }
`;

module.exports = typeDefs;
