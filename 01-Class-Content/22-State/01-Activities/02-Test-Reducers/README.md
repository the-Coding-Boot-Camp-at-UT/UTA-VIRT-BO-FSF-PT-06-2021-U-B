# Test Reducers

In this activity, you will create tests to check if the reducers we created in the previous activity will work properly in production.

## Instructions

* **Note** You will be using one web application, [00-React-App](../00-React-App), for all of our activities today.

* Copy the [src](Unsolved/src) folder and paste it into the `00-React-App` app inside the [client](../00-React-App/client) folder. 

* In the [src](../00-React-App/client/src/) folder, create a new folder for tests, and inside it, create a file called `reducers.test.js`.

  * Import the reducer and the two actions at the top of the page.

  * Create the `initialState` to use for the tests. Include a `books` array and `currentBook` object in this sample of global state.

  * Write a test for `UPDATE_BOOKS`. Check the `BookList` and `Detail` pages to see when we would need to use this action. Think carefully about how we would use this action and what we want to test. 

  * Write a test for `UPDATE_CURRENT_BOOK`. You don't have to change all of the fields of the `currentBook` for our testing purposes. You can change just one field, like the `title`, and test that.

* Navigate to the [client](../00-React-App/client) directory and run `npm run test`. Check if all of the tests passed.

## Hint(s)

* You can refer to the [Create React App Docs on Running Tests](https://create-react-app.dev/docs/running-tests/).
