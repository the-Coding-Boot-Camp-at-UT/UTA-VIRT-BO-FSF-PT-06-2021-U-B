# Blog Joins

In this activity, you will modify the queries in both `post-api-routes.js` and `author-api-routes.js` to use the Sequelize "include" option.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Be sure to modify the [connection.js](Unsolved/config/connection.js) file to include your MySQL user/password information.

* Open the [post-api-routes.js](Unsolved/routes/api/post-api-routes.js) file.

  * Add the "include" option to the queries specified in the comments. We want to "include" the Author model. 

* Open the [author-api-routes.js](Unsolved/routes/api/author-api-routes.js) file.

  * Add the "include" option to the queries specified in the comments. We want to "include" the Post model. 

* To test if everything is working properly, run `npm start` in your terminal and navigate to <http://localhost:3001/> in your browser. 

  * After creating a few Authors with a few Posts each, navigate to either <http://localhost:3001/api/posts> or <http://localhost:3001/api/authors> to make sure the JSON returned for both routes includes all of the data.

## Hint(s) 

* The "include" key goes on the same options object as the "where" attribute we've been using. 

* Note how we are requiring the models in order to set the correct value of the "include" option.