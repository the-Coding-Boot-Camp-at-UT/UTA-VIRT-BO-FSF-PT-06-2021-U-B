# Mongoose Populate

In this activity, you will use the `.populate()` method to return a user with all of the notes associated with that user.

## Instructions

* Open [Note.js](Unsolved/models/Note.js) to see the Note schema.

* Open [User.js](Unsolved/models/User.js) to see how the User schema makes the `.populate()` method possible.

* Open [server.js](Unsolved/server.js) and update the `/populate` route.

  * Write a query to `find()` the users from the User collection and `populate()` them with any associated notes.

* To test it out, run `npm install` and `npm start` in your command line to start the server.

  * Open Insomnia Core and make a POST request to `/submit` with data for a new note in JSON format.

  * Make a GET request to `/populate`. You should see the user "Ernest Hemingway" with the note you just created.

## Hint(s)

* You can refer to the Mongoose docs on [populate](https://mongoosejs.com/docs/populate.html)

## Bonus

* Exclude the `__v` field from the notes and user.