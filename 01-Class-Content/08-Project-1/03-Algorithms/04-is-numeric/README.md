# Is Numeric

In this activity you will be writing code to create a function that accepts a string and returns `true` if the string is a valid number, or `false` if it is not.

## Instructions

* Open [Unsolved/is-numeric.js](Unsolved/is-numeric.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `isNumeric` function to achieve the following:

    * Loop through the given string and determine if it is a valid number.

    * A valid number can only contain:

      * Numeric characters

      * A maximum of one decimal point placed anywhere in the string

      * One `+` or `-` character at the start of the string.

    * For example, given the following str:

    ```js
    var str = "-0123.00";
    ```

    * The function should return `true`

    * Given the following str:

    ```js
    var str = "+-a13";
    ```

    * The function should return `false`

    * Attempt to accomplish this without using any built-in methods such as `isNan`, `parseInt`, `Number`, `parseFloat`, `charChodeAt`, etc.

    * Implicit type conversion is also not allowed. I.e. using arithmetic or comparison operators on the given string such as `-`, `+`, `<`, `>`, etc.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
