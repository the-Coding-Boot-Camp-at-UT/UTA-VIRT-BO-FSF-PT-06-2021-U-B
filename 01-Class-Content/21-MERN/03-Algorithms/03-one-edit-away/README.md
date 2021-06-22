# One Edit Away

In this activity you will be writing code to create a function that takes in two strings and returns true if they are exactly one character edit away from each other, else return false.

## Instructions

* Open [Unsolved/one-edit-away.js](Unsolved/one-edit-away.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `oneEditAway` function to achieve the following:

    * Return `true` if the strings are one character edit away from each other, else return `false`.

    * For example, if given the following strings:

    ```js
    var str1 = "Hello";
    var str2 = "Henlo";
    ```

    * The following should be returned:

    ```js
    true;
    ```

    * Since the "n" in the second string could be edited to an "l" to make the strings the same.

    * Given the following strings:

    ```js
    var str1 = "wow";
    var str2 = "wo";
    ```

    * The following should be returned:

    ```js
    true;
    ```

    * Since a "w" could be added to the end of second string to make the strings match.

    * Given the following strings:

    ```js
    var str1 = "imaginary";
    var str2 = "analogous";
    ```

    * The following should be returned:

    ```js
    false;
    ```

    * Since it would require more than one edit to make the strings match.

     * Given the following strings:

    ```js
    var str1 = "hopeful";
    var str2 = "hopeful";
    ```

    * The following should be returned:

    ```js
    false;
    ```

    * Since the strings are the same, they are no edits away. We only return `true` if the strings are _exactly_ one edit away.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Think about different possible edits that can be made to a string. Besides changing a letter to another letter, what other ways can a string be edited?
