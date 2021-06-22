# Subdocuments

In this activity, you will create notes as a subdocument array for notebooks.

## Instructions

* Open [Notebook.js](Unsolved/models/Notebook.js) to see the notebook schema and how it is including the notes.

* In the [models/](Unsolved/models/) folder, create a `Note.js` file and create the `noteSchema`.

  * Import `Schema` and `Types` from Mongoose.

  * The `noteSchema` should include a `noteId` field that defaults to `new Types.ObjectId()` and a `noteText` field which is a required `String`.

  * Be sure to export `noteSchema`.

* Open [server.js](Unsolved/server.js) and modify the following routes:

  * Modify the POST route to `/api/notebooks/:notebookId/notes` to create a new note for a notebook. 

  * Modify the DELETE route to `/api/notebooks/:notebookId/notes/:noteId` to delete a note from a notebook.

* To test it out, run `npm start` in your command line to start the server.

* Open Insomnia Core and make a POST request to `/api/notebooks` with data for a new notebook in JSON format.

  * Using the `_id` of the notebook, make a POST request to `/api/notebooks/:notebookId/notes` with data for a new note in JSON format.

  * Using the `noteId` of the note, make a DELETE request to `/api/notebooks/:notebookId/notes/:noteId`.

  ## Hint(s)

  * Remember to include `{ runValidators: true, new: true }` when querying the `Notebook` to ensure that the values in `req` adhere to the `noteSchema` in your notebook. 

  * If there is no notebook data returned, then return a 404 status with an error message.

  * If there are any errors, catch them and log them into the console as well as return a 500 status.