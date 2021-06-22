# Read Books

In this activity, you will use Handlebars partials to reuse the template that displays the book details.

## Instructions

* Navigate to the [Unsolved](Unsolved/) folder and run `npm install` in your terminal.

* Create a folder called `partials` inside the `views` folder.

* Inside the `partials` folder, create another folder called `books`.

* Inside the `books` folder, create a Handlebars partial file called `book-block.handlebars`. 

  * Write the code for printing out the book details for each book (`title`, `author`, `read`).

* Open the [index.handlebars](Unsolved/views/index.handlebars) file and do the following:

  * Replace the code that renders the book details with Handlebars partial file you created above.

* To test if everything is working properly, run `npm start` in your terminal and navigate to <http://localhost:3001/> in your browser. 

  * You should be able to see all of the books listed according to their `read` status.

## Hint(s)

* You may need to consult the [Handlebars Partials docs](https://handlebarsjs.com/guide/partials.html#basic-partials) on how to use partials. 