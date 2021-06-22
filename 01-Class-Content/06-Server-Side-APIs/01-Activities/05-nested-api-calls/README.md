# Nested API Calls

In this activity, you will make a call to Wikipedia's API to get the title of a random article. You'll then pass that value to Giphy as the search term.

## Instructions

* Open the [index.html](Unsolved/index.html) file and examine the ID's of the HTML elements. This will be important for DOM manipulation later.

* Open the [script.js](Unsolved/assets/js/script.js) file and do the following:

  * Make a `fetch` request to Wikipedia using this URL: `https://en.wikipedia.org/w/api.php?action=query&format=json&list=random&rnnamespace=0&rnlimit=1&origin=*`

  * Create a variable to hold the title of the Wikipedia article returned by the `fetch` request

  * Display this article title above the GIF as a `<h2>` heading. Check the `index.html` for the correct `<div>` id. 

  * Return a fetch request to the Giphy search API with the article title and rating parameters. Remember to add your API key at the end.

* The GIF returned from Giphy should be related to the Wikipedia article title with the appropriate rating.