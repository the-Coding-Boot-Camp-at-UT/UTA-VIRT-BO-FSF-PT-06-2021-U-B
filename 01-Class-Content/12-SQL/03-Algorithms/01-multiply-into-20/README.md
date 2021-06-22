# Multiply into 20

In this activity you will be writing code to create a function that takes an array of unique numbers. Return `true` if any two numbers can be multiplied into 20, else return `false`.

## Instructions

* Open [Unsolved/multiply-into-20.js](Unsolved/multiply-into-20.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `multiplyInto20` function to achieve the following:

    * Return `true` if any two numbers in the given array multiplies into 20, else return `false`.

    * For example, given the following array:

    ```js
    var arr = [3, 4, 5, 7, 9]; // 4 * 5 === 20
    ```

    * The following should be returned:

    ```js
    true
    ```

    * Given the following array:

    ```js
    var arr = [20, -20, 18, 2, 3, 4]; // no two numbers multiply into 20
    ```

    * The following should be returned:

    ```js
    false
    ```

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* This problem can be solved using a nested for-loop, comparing every number to every other number.

* This problem can also be solved using one loop, utilizing the same technique used in the previous `character-count` and `is-unique` problems.
