# Is Perfect Square

In this activity you will be writing code to create a function that takes in a whole number, and returns `true` if the number is a [perfect square](https://en.wikipedia.org/wiki/Square_number), otherwise returns `false`.

## Instructions

* Open [Unsolved/is-perfect-square.js](Unsolved/is-perfect-square.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `isPerfectSquare` function to achieve the following:

    * If `num` is a [perfect square](https://en.wikipedia.org/wiki/Square_number), return `true`. Else return `false`.

      * A perfect square is a number that has a whole number as a square root.

    * For example, given the following number:

    ```js
    var num = 36; // Square root of 36 is 6
    ```

    * The following number should be returned:

    ```js
    true
    ```

    * Given the following number:

    ```js
    var num = 50; // Square root of 50 is 7.07106781187
    ```

    * The following number should be returned:

    ```js
    false
    ```

    * **Complete this problem without the use of the built-in `Math.sqrt` method.**

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* If you aren't allowed to check the square root of the given number, maybe you can check if the [square of a number](http://www.math.com/school/subject1/lessons/S1U1L9GL.html) is the given number?
