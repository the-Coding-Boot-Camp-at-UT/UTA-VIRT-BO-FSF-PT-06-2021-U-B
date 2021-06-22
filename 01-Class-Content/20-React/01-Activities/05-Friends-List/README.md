# Friends List

In this activity, you will map through `friendsList` and render a `FriendCard` component for each friend. You will also add functionality to remove a `FriendCard` from the page.

## Instructions

* **Note** You will be using the same React application `00-React-App` for all of our activities today. Stop the server if it is still running.

* Copy the [src](Unsolved/src) folder and paste it into the [00-React-App](../00-React-App/) app.

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. None of the `FriendCard`s are rendered on the page.

* Open [App.js](../00-React-App/src/App.js) and do the following:
  
  * Import the `useState` Hook from React. 
  
  * Using `useState`, declare a new state variable `friendsList` and set the initial value to the imported `friends` array from `friends.json`. Name the returned setter method `setFriendsList`.

  * Create a method `removeFriend()` that accepts an `id` parameter and then utilizes the `.filter()` method to create a new array of friends without the passed `id`. Update the state with this new filtered array.

  * Map through `friendsList` to render a `FriendCard` for each friend. Remember to pass the `removeFriend()` method into each `FriendCard` along with each property of a `friend`.

* Keep checking the application in your browser as you make the changes. You should be able to see all of the `FriendCard`s rendered on the page and when you click the red X icon, that `FriendCard` should be removed from the page.

* Press `CTRL + C` to stop the server.

## Hint(s)

* Check `friends.json` for the properties of `friend` to pass into `FriendCard`.

* You can refer to the React Docs on [Using the State Hook](https://reactjs.org/docs/hooks-state.html), [Lists and Keys](https://reactjs.org/docs/lists-and-keys.html), and the [MDN Web Docs on filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter).