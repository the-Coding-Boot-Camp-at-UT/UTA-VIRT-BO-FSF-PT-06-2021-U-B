# Array Intersection

In this activity you will be writing code to create a function that takes two arrays and returns a new array that is the intersection of both arrays. An array intersection in this activity is defined as the set of same number pairs between both arrays. There may be multiple pairs of the same number between both arrays, so a number may appear more than one time in the result.

## Instructions

* Open [Unsolved/array-intersection.js](Unsolved/array-intersection.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `arrayIntersection` function to achieve the following:

    * Return a new array containing the intersection of both passed in arrays.

    * For example, given the following arrays:

    ```js
    var arr1 = [1, 2, 3, 4];
    var arr2 = [3, 4, 5, 6];
    ```

    * The following array should be returned:

    ``js
    [3, 4];
    ```

    * Since both arrays contain one `3` and one `4`.

    * Given the following arrays:

     ```js
    var arr1 = [8, 88, 8, 90, 91, 8];
    var arr2 = [90, 8, 8, 15, 3];
    ```

    * The following array should be returned:

    ``js
    [90, 8, 8];
    ```

    * Since both arrays contain the number `90` once and the number `8` at least twice.

    * **You don't need to worry about the order of the elements in the returned array.**

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
