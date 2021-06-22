# GraphQL Schema

In this activity, you will create a schema for users for a GraphQL API.

## Instructions

* Navigate to [Unsolved](Unsolved/) in your command line and run `npm install` and `npm run seed`.

* Check out the [User.js](Unsolved/models/User.js) file for the `User` model. You will need to know these fields to create type definitions for the `User` data type.

* Create a folder called `schemas` with three files in it: `typeDefs.js`, `resolvers.js`, and `index.js`

  * In `typeDefs.js`, create type definitions for the `User` and `Query` data type.

    * For `User`, include the same fields that were defined in the Mongoose `UserSchema` plus an `_id` field.

    * For `Query`, create a `users` query that will return an array of `User`s.

    * Remember to import the `gql` tagged template function from `apollo-server-express`!

  * In `resolvers.js`, create a `Query` for all `users`.

    * Perform a `.find()` method on the `User` model to get all users.

    * Remember to import the `User` model!

  * In `index.js`, connect the two files and export them.

* To check if everything is working properly, run `npm run watch` in your command line and open your browser to <http://localhost:3001/graphql> to view the GraphQL Playground.

  * Test out the query for all users. For example, `query { users { name }}` should get you a list of all the users' names.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [Apollo Server Docs for Schemas](https://www.apollographql.com/docs/apollo-server/schema/schema/).

## Bonus

* When querying users, omit the Mongoose-specific `__v` property and the user's password information.