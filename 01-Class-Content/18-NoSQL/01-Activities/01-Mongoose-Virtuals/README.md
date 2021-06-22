# Mongoose Virtuals

In this activity, you will use Mongoose virtuals to add a property to a user that won't be stored in the database.

## Instructions

* Open [User.js](Unsolved/models/User.js) and do the following:

  * Create a virtual property named `username` that will be taken from the front part of the email address (before the `@` symbol)

  * Remember to set the `toJSON` schema option to use virtuals and set the `id` to false since we don't need it for virtuals.

* To test it out, run `npm start` in your command line to start the server.

* Open Insomnia Core and make a POST request to `/submit` with data for a new user in JSON format.

  * You should see the response in JSON that includes a `username` virtual property.

  * If you make a few more users and then make a GET request to `/users` in Insomnia Core, you should see all of the users in the database with `username` as a virtual property.

## Hint(s)

* You can use `slice()` or `split()` to get the front part of the email address.