# Rotation Point

In this activity you will be writing code to create a function that takes in an array of strings. These strings will be in sorted order, but the array may be rotated. Return the index of the rotation or -1 if there is none.

## Instructions

* Open [Unsolved/rotation-point.js](Unsolved/rotation-point.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `rotationPoint` function to achieve the following:

    * If the sorted array has been rotated, return the index of rotation, else return -1. The rotation point will be the first word that is less than the previous word alphabetically.

    * For example, given the following array:

    ```js
    var words = ["cool", "cat"];
    ```

    * The following should be returned:

    ```js
    1;
    ```

    * Since alphabetically "cat" comes before "cool".

    * Given the following array:

    ```js
    var words = ["great", "ostrich", "panther", "ruby", "chosen", "feathers"];
    ```

    * The following should be returned:

    ```js
    4;
    ```

    * Since alphabetically, "chosen" comes before "ruby".

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Look into how you would check if one string comes before another alphabetically. It's similar to how you'd compare the order of numbers.
