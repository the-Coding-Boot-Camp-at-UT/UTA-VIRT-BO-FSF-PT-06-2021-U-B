# Sequelize CRUD

In this activity, you will use Sequelize CRUD methods to create new todos, update and delete todos, and view all todos. 

## Instructions

* Create a `todolist` DB.

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/config/connection.js) file to include your MySQL user/password information.

* In the [api-routes.js](Unsolved/routes/api-routes.js) file, add the following Sequelize methods:

  * Add a Sequelize `findAll()` method inside the GET route which finds all of the todos and returns them to the user as JSON.

  * Add a Sequelize `create()` method inside the POST route to save a new todo to the database using the data in `req.body`.

  * Add a Sequelize `destroy()` method inside the DELETE route to delete the todo with the id from `req.params.id`.

  * Add a Sequelize `update()` method inside the PUT route to update a todo with the new todo data in `req.body`.

* To test if this worked, open your terminal and run `npm start`. 

  * Navigate to <http://localhost:3001/> in your browser. 
  
  * If you are able to save new todos, as well as update and delete todos, you were successful.

## Hint(s)

* You may need to read the Sequelize documentation on the [findAll()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-findAll), [create()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-create), [update()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-update), [destroy()](https://sequelize.org/v5/class/lib/model.js~Model.html#static-method-destroy) methods, as well as [how to apply the "where" clause](https://sequelize.org/v5/manual/querying.html#where).