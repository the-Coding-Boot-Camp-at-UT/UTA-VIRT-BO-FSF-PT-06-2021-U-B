# String Map

In this activity you will be writing code to create a function that takes in a string and returns an object containing each character in the string and their positions.

## Instructions

* Open [Unsolved/string-map.js](Unsolved/string-map.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `stringMap` function to achieve the following:

    * Return an object containing keys for each character in the string.

    * Each key should point to an array containing the indexes of each occurrence of the character in the string.

    * For example, given the following string:

    ```js
    var str = "HTML & CSS";
    ```

    * The following array should be returned:

    ```js
    { "H": [0], "T": [1], "M": [2], "L": [3], " ": [4, 6], "&": [5], "C": [7], "S": [8, 9] }
    ```

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Take your time understanding the problem before you attempt to solve it. Try to work it out on paper before you write any code.
