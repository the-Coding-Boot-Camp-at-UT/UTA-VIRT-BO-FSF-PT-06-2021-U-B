# Left Rotation

In this activity you will be writing code to create a function that takes an array of integers and a positive integer as arguments. The function should then rotate the elements of the array to the left by the given number.

## Instructions

* Open [Unsolved/left-rotation.js](Unsolved/left-rotation.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `leftRotation` function to achieve the following:

    * Rotate the elements in the given array to the left by the given positions number.

    * For example, given the following array and positions number:

    ```js
    var arr = [1, 2, 3];
    var positions = 2;
    ```

    * The given array should be updated to the following:

    ```js
    [3, 1, 2];
    ```

    * If an empty array is provided, the array should not be modified.

    * **Modify the original array to complete this problem. There is no need to return anything from this function.**

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* In order to "rotate" an array to the left by one position, you need to remove the first element of the array, and add it to the end of the array.
