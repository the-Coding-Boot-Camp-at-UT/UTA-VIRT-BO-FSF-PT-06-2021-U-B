# useState Counter

In this activity, you will use the `useState` Hook to declare a state variable and update it by incrementing or decrementing using click handlers on buttons. 

## Instructions

* **Note** You will be using the same React application, [00-React-App](../00-React-App), for all of our activities today. Stop the server if it is still running.

* Copy the [src](Unsolved/src) folder and swap out the previous `src` folder in the [00-React-App/](../00-React-App/) app with this one.

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. We see two buttons but nothing happens when we click them. Also the "Click Count" is blank.

* Open [Counter.js](../00-React-App/src/components/Counter.js) and implement the following:

  * Import `useState` Hook from React.

  * Inside the `Counter` component, using `useState`, declare a new state variable `count` and initialize it to zero by passing `0` as the `useState` argument. Name the returned setter method `setCount`.

  * Show the current `count` value.

  * Add a click handler to the two buttons so that when the buttons are clicked, `setCount` is called and `count` is assigned a new incremented or decremented value respectively.

* Check the application in your browser to see if the counter works properly.

* Press `CTRL + C` to stop the server.

## Hint(s)

* You can refer to the React Docs on [Using the State Hook](https://reactjs.org/docs/hooks-state.html).