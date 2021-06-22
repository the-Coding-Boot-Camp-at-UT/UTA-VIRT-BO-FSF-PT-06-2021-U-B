# GraphQL Client

In this activity, you will make a GraphQL query request from the client side to get a list of books from the database.

## Instructions

* Navigate to [Unsolved/](Unsolved/) in your command line and run `npm install` and `npm run seed`.

* Take a moment to review the contents of the `client` and `server` folders.

* In the [src](Unsolved/client/src) folder, create a new folder called `utils`. 

  * In the `utils` folder, create a new file called `queries.js` that will store the GraphQL query requests.

  * Using a tagged template literal, create a query to get all books from the database. You can name it `QUERY_BOOKS` and remember to export it.

  * You can check out the [typeDefs](Unsolved/server/schemas/typeDefs.js) for reference!

* Open [Home.js](Unsolved/client/src/pages/Home.js) 

  * Import `QUERY_BOOKS` at the top of the page.

  * Use the `useQuery` hook to make a query request. Remember, the hook provides a `loading` and `data` property.

* To check if everything is working properly, navigate to [Unsolved/](Unsolved/) and run `npm start` in your command line.

  * You should be able to see a list of books with the title, author, and page number of each book.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [Apollo Docs on Apollo Client](https://www.apollographql.com/docs/react/).
