# useEffect Thermostat

In this activity, you will use the `useEffect` Hook to update the browser tab to reflect the current temperature.

## Instructions

* **Note** You will be using the same React application, [00-React-App](../00-React-App), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the [00-React-App](../00-React-App/) app. 

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. The browser tab says "React App" but we want it to show our current temperature, which right now is set to 0.

* Open [Thermostat.js](../00-React-App/src/components/Thermostat.js) and do the following:

  * Import `useEffect` Hook from React.

  * Set the `temp` variable to any starting temperature of your choice.

  * Use the `useEffect` Hook to set the `document.title` to the current temperature.

* Check the application in your browser to see if the browser tab now reflects the current temperature. Raise and lower the temperature to see the browser tab automatically updated!

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the React Docs on [Using the Effect Hook](https://reactjs.org/docs/hooks-effect.html).