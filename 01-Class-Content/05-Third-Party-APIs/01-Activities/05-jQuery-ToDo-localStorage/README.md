# jQuery To-do List with localStorage

In this activity, you will dynamically generate HTML and get form values using jQuery, as well as set and get items in localStorage.

## Instructions

* Open [Unsolved/index.html](Unsolved/index.html) and do the following:

  * Take time to examine the code and comments, especially for the `renderTodos()` function.

  * Modify the event handler for the `#add-to-do` form
  
    * When it is 'clicked', the value in the form field is assigned to a variable, which is then pushed to the `list` array and passed into the `renderTodos()` function.

    * Save the to-dos to `localStorage` using `JSON.stringify()`

  * Modify the event handler for the `.checkbox`
  
    * When it is 'clicked', get the `id` of the button in order to delete the right to-do from the `list` array and pass into the `renderTodos()` function.

    * Save the to-dos to `localStorage` using `JSON.stringify()`

## Hint(s)

* Detailed instructions are in the `index.html` file as comments.

* You may need to refer to the [`this` MDN documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this),[data-attributes MDN documentation](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/data-*), and [jQuery `.on()` documentation](https://api.jquery.com/on/).