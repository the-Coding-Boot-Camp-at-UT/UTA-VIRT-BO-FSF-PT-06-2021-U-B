# Global State

In this activity, you will create a new context object for the global state.

## Instructions

* **Note** You will be using one web application, [00-React-App](../00-React-App), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the `00-React-App` app inside the [client](../00-React-App/client) folder. 

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. 

* In the `utils` folder, create a file called `GlobalState.js` and do the following:

  * Import `createContext` and `useContext` from react. Also import the `useBookReducer` function.

  * Instantiate the global state object.

  * Create a function called `StoreProvider` that will instantiate the initial global state using the `useBookReducer()` function. Remember to include an empty array for `books` and an empty object for `currentBook`. Return the `StoreContext`'s `<Provider>` component.

  * Create a custom React Hook called `useStoreContext` that uses the `useContext()` Hook to give access to the data the `StoreProvider` provider manages. 

  * Finally export both the `StoreProvider` and `useStoreContext()` Hook.

* Open [App.js](../00-React-App/client/src/App.js) and import the `StoreProvider` so that the global state will be available to all of the components.

  * Wrap all of the components in `<StoreProvider>`.

* Check the application running the browser to make sure everything still compiles and functions correctly. 

* Press `CTRL + C` to stop the server before moving on to the next activity.

## Hint(s)

* You can refer to the [React Docs on Context](https://reactjs.org/docs/context.html)
