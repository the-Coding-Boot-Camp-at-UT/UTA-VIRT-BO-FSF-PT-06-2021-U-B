# Is Armstrong

In this activity you will be writing code to create a function that takes a positive integer and returns `true` if the integer is an armstrong number, else return `false`. To find out if a number is an armstrong number, take each individual digit and raise it to the power of the length of the entire number and add the digits. If the sum equals the original number, the number is an armstrong number. For more information, refer to the following [Quora post: What is an Armstrong Number](https://www.quora.com/What-is-an-Armstrong-number).

## Instructions

* Open [Unsolved/is-armstrong.js](Unsolved/is-armstrong.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `isArmstrong` function to achieve the following:

    * Return `true` if the provided number is an armstrong number, else return `false`.

    * For example, given the following integer:

    ```js
    var num = 153;
    ```

    * The following should be returned:

    ```js
    true;
    ```

    * Since `(1^3) + (5^3) + (3^3) === 153`

    * Given the following number:

    ```js
    var num = 11;
    ```

    * The following should be returned:

    ```js
    false;
    ```

    * Since `(1^2) + (1^2) !== 11`

    * Assume the given number is a non-negative whole number.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
