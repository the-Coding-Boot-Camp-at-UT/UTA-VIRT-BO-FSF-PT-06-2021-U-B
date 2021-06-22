# Blog CRUD

In this activity, you will add validations for the `Post` model and add Sequelize CRUD methods to the appropriate routes. 

## Instructions

* Create a `blogger` DB. You will use this database for all of today's activities.

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/config/connection.js) file to include your MySQL user/password information. 

* Open the [post.js](Unsolved/models/post.js) file and examine the Sequelize `Post` model.

* Add the following validations:

  1. Flags to the `title` and `body` to prevent NULL values from being entered.

  2. A validation to the `title` so that it must be between 1 and 160 characters.

  3. A flag to the category so that it has a default value of "Personal" if a value is not supplied.

* Open the [api-routes.js](Unsolved/routes/api-routes.js) file and fill in each route with the following Sequelize methods:

  * A `findAll()` method inside the GET route to get the posts of a specific category.

  * A `findOne()` method inside the GET route to get a single post using the id from `req.params.id`.

  * A `create()` method inside the POST route to create a new post using the data in `req.body`.

  * A `destroy()` method inside the DELETE route to delete a post using the id from `req.params.id`.

  * An `update()` method inside the PUT route to update a post using the new data in `req.body`.

* To test if everything is working properly, run `npm start` in your terminal. Navigate to <http://localhost:3001/> in your browser and check if you have the following functionality (in this recommended order):

  1. Create a new post
  
  2. Get a list of all posts
  
  3. Get a list of all posts of a category
  
  4. Edit a post
  
  5. Delete a post

## Hint(s)

* You may need to consult the [Sequelize Validations & Constraints docs](https://sequelize.org/master/manual/validations-and-constraints.html) on how to validate the data.

* You may need to read the Sequelize documentation on the [findAll()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll), [create()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-create), [update()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-update), [destroy()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-destroy) methods, as well as [how to apply the "where" clause](https://sequelize.org/v5/manual/querying.html#where).

* If things aren't working as expected, check to see if any errors logged to the terminal.