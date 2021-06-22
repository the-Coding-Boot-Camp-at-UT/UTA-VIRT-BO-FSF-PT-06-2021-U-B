# Squares of a Sorted Array

In this activity you will be writing code to create a function that takes an array of integers sorted in ascending (increasing) order and returns a new array containing the squares of each number in ascending order.

## Instructions

* Open [Unsolved/squares-of-a-sorted-array.js](Unsolved/squares-of-a-sorted-array.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `sortedSquares` function to achieve the following:

    * Return a new array containing the squares of each number in the first array in sorted order.

    * For example, given the following array:

    ```js
    var arr = [-4, -1, 0, 3, 10];
    ```

    * The following array should be returned:

    ```js
    [0, 1, 9, 16, 100];
    ```

    * Given the following array:

     ```js
    var arr = [-7, -3, 2, 3, 11];
    ```

    * The following array should be returned:

    ```js
    [4, 9, 9, 49, 121];
    ```

    * Notice how squaring a number may change its order in the new array. ie `-7` is less than `2`, but `-7` squared is greater than `2` squared.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
