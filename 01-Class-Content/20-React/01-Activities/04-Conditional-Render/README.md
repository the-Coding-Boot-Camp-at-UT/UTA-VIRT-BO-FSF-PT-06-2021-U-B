# Conditional Render

In this activity, you will render one of four different components based upon the component's state using a `switch` statement.

## Instructions

* **Note** You will be using the same React application `00-React-App` for all of our activities today. Stop the server if it is still running.

* Copy the [src](Unsolved/src) folder and paste it into the [00-React-App](../00-React-App/) app. 

* Navigate to [01-Activities/00-React-App](../00-React-App) and start the app in dev mode by running `npm start` from your command line.

* Check out the application running on <http://localhost:3000> in your browser. At the top of the page, there's a Bootstrap NavTabs component. Whenever a nav element is clicked, the nav element goes into an "active" state. But nothing is rendered on the page.

* Open [NavTabs.js](../00-React-App/src/components/NavTabs.js) and observe the code.
  
  * We are mapping through the tabs and creating the `<li>` nav items for each tab.
  
  * Whenever a nav item is clicked, it sets the `currentPage` inside of the `Portfolio` component to the selected tab through the `handlePageChange` method.

* Open [PortfolioContainer.js](../00-React-App/src/components/PortfolioContainer.js) and do the following:

  * Add a `switch` statement to `renderPage()` so that depending on the `currentPage`, a different component is returned in order to be rendered on the page.

    * Return the `About` component when `currentPage`is "About".
  
    * Return the `Blog` component when `currentPage` is "Blog".

    * Return the `Contact` component when `currentPage` is "Contact".

    * Return the `Home` component as default.

  * Under the `<NavTabs>`, render the component returned by `renderPage()`.

* Check the application in your browser to see if the page changes when you click the different nav items.

* Press `CTRL + C` to stop the server before moving on to the next activity.

### Hints

* You can refer to the React Docs on [Conditional Rendering](https://facebook.github.io/react/docs/conditional-rendering.html) and MDN Web Docs on [switch statements](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch).
