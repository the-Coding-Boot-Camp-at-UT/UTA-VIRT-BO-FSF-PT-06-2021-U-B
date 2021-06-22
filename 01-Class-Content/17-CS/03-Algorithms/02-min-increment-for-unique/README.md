# Min Increment For Unique

In this activity you will be writing code to create a function that takes in an array of numbers and returns the minimum number of increments needed to make the numbers unique.

## Instructions

* Open [Unsolved/min-increment-for-unique.js](Unsolved/min-increment-for-unique.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `minIncrement` function to achieve the following:

    * Return the minimum number of increments needed to make the numbers unique.

    * For example, given the following string:

    ```js
    var arr = [1, 2, 2];
    ```

    * The following should be returned:

    ```js
    1;
    ```

    * Since the array could be made to be unique by incrementing one of the number `2`s by `1`.

    * If given the following array:

    ```js
    var arr = [3, 2, 1, 2, 1, 7];
    ```

    * The following should be returned:

    ```js
    6;
    ```

    * Since one of the number `2`s could be incremented twice to make `4` and one of the number `1`s could be incremented four times to make `5`. Together this is `6` increments total.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
