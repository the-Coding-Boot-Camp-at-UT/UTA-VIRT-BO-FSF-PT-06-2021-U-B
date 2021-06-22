# Mongoose CRUD

In this activity, you will create, update, and delete notes from the database collection using Mongoose. 

## Instructions

* Open [Note.js](Unsolved/models/Note.js) to see the Note schema.

* Open [server.js](Unsolved/server.js) and modify the following routes:

  * In the POST route to `/submit`, create a new note in the database's collection.

  * In the GET route to `/all`, retrieve all notes in the collection.

  * In the POST route to `/update/:id`, update one note by its ObjectId, `_id`. If there is no note with that `id` in the collection, return an error message.

  * In the DELETE route to `/delete/:id`, delete one note by its ObjectId, `_id`. If there is no note with that `id` in the collection, return an error message.

* To test it out, run `npm install` and `npm start` in your command line to start the server.

  * Open Insomnia Core and make a POST request to `/submit` with data for a new note in JSON format.

  * Now make a GET request to `/all`, POST request to `/update/:id`, and DELETE request to `/delete/:id` to check the rest of your routes.

## Hint(s)

* You can refer to the Mongoose docs on [queries](https://mongoosejs.com/docs/queries.html).