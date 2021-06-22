# Pets or Animals

In this activity, you will use Handlebars built-in helpers to render details about animals.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Open the [server.js](Unsolved/server.js) file and do the following:

  * Set Handlebars as the default template engine.

  * For simplicity, do not use MySQL or Sequelize for this activity. Use the given `animals` array as your dummy data. 

  * Modify the `/all-pets` route so that only the animals that are pets are sent to the `index.handlebars` file.

  * Modify the `/all-non-pets` route so that only the animals that are not pets are sent to the `index.handlebars` file.

* In the [Unsolved/views/index.handlebars](Unsolved/views/index.handlebars) file, loop through the animals sent to this page and print out the details for each animal using the appropriate Handlebars helper function.

## Hint(s)

* You may need to consult the [Express Handlebars Helpers docs](https://www.npmjs.com/package/express-handlebars#helpers) on how to use the build-in helpers. 