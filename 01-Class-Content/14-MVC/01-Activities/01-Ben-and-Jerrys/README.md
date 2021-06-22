# Ben and Jerry's 

In this activity, you will use Handlebars to render details about specific Ben and Jerry's ice cream flavors. 

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Open the [server.js](Unsolved/server.js) file and do the following:

  * Set Handlebars as the default template engine.

  * For simplicity, do not use MySQL or Sequelize for this activity. Add the `icecreams` array below as your dummy data:

  ```js
  const icecreams = [
    {name: 'Milk and Cookies', price: 10, awesomeness: 3},
    {name: 'Chocolate Peanut Butter Split', price: 4, awesomeness: 8},
    {name: 'Bourbon Pecan Pie', price: 1, awesomeness: 1},
    {name: 'Chubby Hubby', price: 5, awesomeness: 7},
    {name: 'Coffee Toffee Bar Crunch', price: 6, awesomeness: 2},
    {name: "Ice Cream Sammie", price: 11, awesomeness: 15 }
  ];
  ```

  * Using Handlebars and Express, create a route called `/:num`.

    * When the route is hit, it will display the name, price and awesomeness for that specific ice cream.

    * Look at how [all.handlebars](Unsolved/views/all.handlebars) is hard-coded in order to render the right ice cream.

* In the [Unsolved/views](Unsolved/views/) folder, create a new Handlebars file called `icecream.handlebars`.

  * Create a template that will print out the name, price and awesomeness for that specific ice cream.

## Hint(s)

* You may need to consult the [Express Handlebars docs](https://www.npmjs.com/package/express-handlebars#usage) for its usage.