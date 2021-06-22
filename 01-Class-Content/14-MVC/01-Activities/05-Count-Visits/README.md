# Count Visit

In this activity, you will use `express-session` to keep track of how many times a user visits a page.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Open the [index.handlebars](Unsolved/views/index.handlebars) file and examine the code on top.

  * If this is the first time the user is visiting the page, they will be welcomed with a special message. 
  
  * Otherwise, the user will know how many times they have visited the page. 

* Open the [server.js](Unsolved/server.js) file and do the following:

  * Require the `express-session` module.

  * Set up sessions with a `secret` option set to a random string, a `resave` option set to `false`, and a `saveUninitialized` option set to `false`. 

  * In the `/` route, if the `countVisit` session variable exists, increment it by 1 and set the `firstTime` session variable to `false`.

  * If the `countVisit` session variable doesn't already exist, set it to 1 and set the `firstTime` session variable to `true`.

  * In the `data` object, include the `books` array, `countVisit` and `firstTime` session variables to be sent over to `index.handlebars`.

* To test if everything is working properly, run `npm start` in your terminal and navigate to <http://localhost:3001/> in your browser. 

  * You should be greeted with "This is your first time visiting the Library!"

  * Refresh your browser and you will see "You have visited the Library ## times!" incrementing every time you refresh.

## Hint(s)

* Take a look at `index.handlebars` to see how the variables need to be named in the `data` object.

* You may need to consult the [Express-Session docs](https://www.npmjs.com/package/express-session) on how to implement sessions using `express-session`.