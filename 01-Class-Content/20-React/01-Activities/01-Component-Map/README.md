# Component Map

In this activity, you will map over a list of groceries and render each item in an unordered list on the page.

## Instructions

* **Note** You will be using the same React application, [00-React-App](../00-React-App), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the [00-React-App/](../00-React-App/) app. 

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. Right now, we don't see any of the grocery items on the page.

* Open [App.js](../00-React-App/src/App.js) and notice the array of groceries. It is passed into the `List` component.

* Open [List.js](../00-React-App/src/components/List.js) and do the following:

  * Inside of the `<ul>` tags, `.map` over the groceries that were passed through props.

  * Render a `<li>` tag for each item and display the `name` property of each item.

* Check the application in your browser to see all of the groceries listed.

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the React Docs on [Lists and Keys](https://facebook.github.io/react/docs/lists-and-keys.html) and the MDN Web Docs on [Array.prototype.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map).

## Bonus

* For styling purposes, give each `<li>` tag a `className` of `list-group-item`.
