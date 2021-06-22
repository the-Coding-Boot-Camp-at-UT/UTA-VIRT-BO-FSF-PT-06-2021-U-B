# Serving Static Files

In this activity, you will update the home route to return `index.html` when a request is made at `/`.

## Instructions

* Navigate to your [Unsolved](Unsolved/) folder and run `npm install`

* Open the [Unsolved/server.js](Unsolved/server.js) file.

* Import the `path` module

* Update the home route `/`.

  * Use `res.sendFile()` and `path.join()` to return `index.html`

* To check if the home route was updated correctly, navigate to <http://localhost:3001/> in your browser.