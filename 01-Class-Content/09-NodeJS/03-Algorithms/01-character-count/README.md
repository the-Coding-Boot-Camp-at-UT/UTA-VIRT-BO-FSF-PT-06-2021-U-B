# Character Count

In this activity you will be writing code to create a function that takes a string and returns an object containing the characters in the string and the number of times they appear.

## Instructions

- Open [Unsolved/character-count.js](Unsolved/character-count.js) in your code editor -- **this is the only file you will modify in this activity.**

  - In this file you will be writing code in the body of the `characterCount` function to achieve the following:

    - Create a new object.

    - Loop through each character in the given string and create a new key for each character in the string.

    - The value of the character's key should be the number of times it appears in the string.

    - For example, given the following string:

    ```js
    var str = "Hello World!";
    ```

    - The following object should be returned:

    ```js
    { H: 1, e: 1, l: 3, o: 2, ' ': 1, W: 1, r: 1, d: 1, '!': 1 }
    ```

- You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  - Functions that _pass_ the tests will be denoted with a **green check mark**.

  - Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

- You will need to use [object bracket notation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Property_accessors) to achieve this.
