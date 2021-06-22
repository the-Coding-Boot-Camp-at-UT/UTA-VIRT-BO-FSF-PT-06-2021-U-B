# useEffect fetch

In this activity, you will use the `useEffect` Hook to make HTTP calls using `fetch` and a search term to the Giphy API.

## Instructions

* Navigate to [Unsolved/](Unsolved/) in your command line and run `npm install`.

* Run `npm start` in your command line and notice how there is no GIF loaded on the page yet.

* Press `CTRL + C` to stop the server before moving on.

* Open [SearchGiphy.js](Unsolved/src/pages/SearchGiphy.js) and do the following:

  * Take a moment to see what is happening on the page and why no GIF is shown when the page is first loaded.
  
  * Import the `useEffect` Hook at the top of the page.

  * Use `useEffect` to run the `handleSearchGiphy()` function with a search term of your choice as the argument. This should display a GIF on the page when the page is loaded.

* To check if everything is working properly, navigate to [Unsolved/](Unsolved/) and run `npm start` in your command line.

  * Now you should see a GIF loaded on the page before you search for anything.

  * Go ahead and search for another GIF. That should replace the GIF on the page.

* Press `CTRL + C` to stop the server.

## Hint(s)

* You can refer to the React Docs on [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html), especially the [last part](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects) about running an effect only once.