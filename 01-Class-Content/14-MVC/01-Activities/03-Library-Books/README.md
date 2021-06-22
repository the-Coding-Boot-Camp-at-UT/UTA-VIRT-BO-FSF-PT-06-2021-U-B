# Library Books

In this activity, you will use Handlebars built-in helpers to render details about library books.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Open the [server.js](Unsolved/server.js) file and do the following:

  * Set Handlebars as the default template engine.

  * For simplicity, do not use MySQL or Sequelize for this activity. Use the given `books` array as your dummy data. 

  * Modify the GET route so that all the books are sent to the `index.handlebars` file. 

    * Remember, Handlebars requires an object to be sent to the `index.handlebars` file, not an array!

* In the [Unsolved/views/index.handlebars](Unsolved/views/index.handlebars) file, loop through the books sent to this page.

  * For `{{#each}}` of the books, check `{{#if}}` the book has been read using the appropriate helper functions.

  * In an unordered list, print out the details of the books in the correct list.

* To test if everything is working properly, run `npm start` in your terminal and navigate to <http://localhost:3001/> in your browser. 

  * You should be able to see all of the books listed according to their `read` status.

## Hint(s)

* You may need to consult the [Express Handlebars Helpers docs](https://www.npmjs.com/package/express-handlebars#helpers) on how to use the build-in helpers. 