# Query Params

In this activity, you will add a "rating" parameter to the Giphy API call. This parameter filters Giphy results based on the MPAA rating system: G, PG, PG-13.

## Instructions

* Open the [index.html](Unsolved/index.html) file and add a `<select>` menu with 3 options: G, PG, and PG-13.

* Open the [script.js](Unsolved/assets/js/script.js) file and do the following:

  * Create a variable to hold the value of the rating. 

  * Modify the `fetch` request with a `rating` parameter. Remember to add your API key.

* The image returned from Giphy should have the appropriate `rating` value (or lower) in the response. You can check this by using the Chrome DevTools network tab.

## Hint(s)

* Adding the rating is very similar to adding `searchTerm` in the previous activity.

* Remember the query string parameters are separated by an ampersand (`&`).

* You may need to refer to the [Giphy API endpoint docs](https://developers.giphy.com/docs/api/endpoint#search).
