# GraphQL Mutations

In this activity, you will add a mutation to add a book to the library.

## Instructions

* Navigate to [Unsolved](Unsolved/) in your command line and run `npm install`.

* Open [typeDefs.js](Unsolved/schemas/typeDefs.js) and define a new `Mutation` type.

  * Add a `addBook()` mutation that takes in `title`, `author`, and `pages` properties and returns a `Book` object.

* Open [resolvers.js](Unsolved/schemas/resolvers.js) and add a `Mutation` property.

  * Add a `addBook()` resolver that creates a new book in the database and returns the new book.

* To check if everything is working properly, run `npm run watch` in your command line and open your browser to <http://localhost:3001/graphql> to view the GraphQL Playground.

  * In the query pane, test the `addBook()` mutation using the query variables `title`, `author`, and `pages` for a new book. You should be able to create a new book in the database.

  * To double check, run a query on all books and you should be able to see the newly created book.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [Apollo Server Docs on Mutation type](https://www.apollographql.com/docs/apollo-server/schema/schema/#the-mutation-type).
