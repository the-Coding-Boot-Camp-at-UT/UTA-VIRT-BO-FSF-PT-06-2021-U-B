# Missing Number

In this activity you will be writing code to create a function that takes an unsorted array of positive and unique integers and returns the missing integer.

## Instructions

* Open [Unsolved/missing-number.js](Unsolved/missing-number.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `missingNumber` function to achieve the following:

    * Return the number missing from the array.

    * For example, given the following array:

    ```js
    var arr = [3, 0, 1];
    ```

    * The following should be returned:

    ```js
    2;
    ```

    * Since `0`, `1`, and `3` are present, the number missing from the sequence is `2`.

    * Though the array is unsorted, a sequence will always start from `0`.

    * If no numbers are missing from the sequence, assume the missing number is the next highest number in the sequence. For example, given the following array:

    ```js
    var arr = [0];
    ```

    * The following should be returned:

    ```js
    1;
    ```

    * Given the an empty array:

    ```js
    var arr = [];
    ```

    * The following should be returned:

    ```js
    0;
    ```

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
