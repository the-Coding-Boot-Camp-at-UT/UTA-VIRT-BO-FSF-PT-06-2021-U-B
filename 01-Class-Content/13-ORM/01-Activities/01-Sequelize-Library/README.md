# Sequelize Library

In this activity, you will use Sequelize query methods to create the required routes.

## Instructions

* Create a `sequelize_library` DB.

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/app/config/connection.js) file to include your MySQL user/password information.

* In the [api-routes.js](Unsolved/app/routes/api-routes.js) file, modify the following routes to use Sequelize query methods:

  * Get all books

  * Get all books of a specific genre

  * Get all books from a specific author

  * Get all "long" books (books with 350 pages or more)

  * Get all "short" books (books with 350 pages or less)

## Hint(s)

* You may need to consult the [Sequelize Manual on Operators](https://sequelize.org/v5/manual/querying.html#operators) for the last two queries involving book pages.

## Bonus

* Display the "long" books in descending order and the "short" books in ascending order.