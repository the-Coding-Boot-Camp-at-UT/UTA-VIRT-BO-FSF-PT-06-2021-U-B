# JSON Web Token

In this activity, you will implement JSON Web Tokens as a way to authenticate a user logging in.

## Instructions

* Navigate to [Unsolved](Unsolved/) in your command line and run `npm install`.

* Create a folder called `utils` with a new file called `auth.js`.

  * Require `jsonwebtoken` on top.

  * Create a JWT `secret` and an `expiration`.

  * Export the `signToken()` function that takes in a `user` object and adds the `email` and `_id` properties to the token, along with the `secret` and `expiration`.

* Open [typeDefs.js](Unsolved/schemas/typeDefs.js) and define a new `Mutation` and `Auth` type.

  * Add a `login()` mutation that takes in an `email` and `password` and returns an `Auth` object.

  * Add a `Auth` type that must return a `token` and can include any other `user` data.

* Open [resolvers.js](Unsolved/schemas/resolvers.js) and import the `signToken()` function on top.

  * Update the `login()` mutation to sign a `token` and return an object that combines the `token` with the user's data.

* To check if everything is working properly, run `npm run watch` in your command line and open your browser to <http://localhost:3001/graphql> to view the GraphQL Playground.

  * Query all users for their `email` and `password`. For now, you should be able to see their passwords. Make note of one user's email and password to test out the `login()` mutation.

  * Open another tab in GraphQL Playground and test the `login()` mutation using the query variables `email` and `password` of the user noted above.

  * You should be able to see the `token` along with any other `user` data you included.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [Introduction to JSON Web Tokens Docs](https://jwt.io/introduction/).
