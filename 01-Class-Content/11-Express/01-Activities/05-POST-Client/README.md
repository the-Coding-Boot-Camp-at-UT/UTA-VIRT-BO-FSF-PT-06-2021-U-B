# POST Client

In this activity, you will add a route to return `add.html` when a request is made at `/add`.

## Instructions

* Open the [Unsolved/server.js](Unsolved/server.js) file.

  * Create an `/add` route that returns `add.html`. 

* Open the [Unsolved/add.html](Unsolved/add.html) file.

  * Examine the jQuery at the bottom of the file and take turns explaining what the code is doing.
  
## Bonus 

* Use Regular Expressions (RegEx), like the following code snippet, to create route names without spaces in the POST route.

  ```js
  .replace(/\s+/g, "")
  ```

* You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html