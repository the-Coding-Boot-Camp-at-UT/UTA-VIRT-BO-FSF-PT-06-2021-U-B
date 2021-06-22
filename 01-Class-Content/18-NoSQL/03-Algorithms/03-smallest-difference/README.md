# Smallest Difference

In this activity you will be writing code to create a function that takes in two sorted arrays of integers. Your function should return a new two element array containing one number from each sorted array with the smallest difference.

## Instructions

* Open [Unsolved/smallest-difference.js](Unsolved/smallest-difference.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `smallestDifference` function to achieve the following:

    * Return a two element array containing the integers from both arrays with the smallest distance.

    * For example, given the following arrays:

    ```js
    var arr1 = [1, 6, 7, 9];
    var arr1 = [8, 9, 10, 11, 12, 13];
    ```

    * The following should be returned:

    ```js
    [9, 9];
    ```

    * Since both arrays contain the number `9` and the difference between same numbers is `0`.

    * Given the following arrays:

    ```js
    var arr1 = [2, 4, 6, 8, 15, 20];
    var arr2 = [17, 25, 30, 47];
    ```

    * The following should be returned:

    ```js
    [15, 17];
    ```

    * Since the difference between `15` and `17` is `2`, the smallest difference between any two numbers across the arrays

    * Assume each array will contain at least one integer.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* How can you use the fact that the arrays are sorted to your advantage?
