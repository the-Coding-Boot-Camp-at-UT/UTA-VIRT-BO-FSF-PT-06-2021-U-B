# Needle in the Haystack

In this activity you will be writing code to create a function that takes two strings and checks to see if the second string is present in the first string. If so, the starting index of the second string in the first string should be returned, else `-` should be returned.

## Instructions

* Open [Unsolved/needle-in-the-haystack.js](Unsolved/needle-in-the-haystack.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `strStr` function to achieve the following:

    * If the second string is a substring of the first string, return its starting index in the first string.

    * For example, given the following strings:

    ```js
    var str1 = "JavaScript";
    var str2 = "Scr";
    ```

    * The following number should be returned:

    ```js
    4;
    ```

    * Since `Scr` is found inside of the first string, starting at index `4`:

    * If the second string is empty, return `0`. For example:

     ```js
    var str1 = "algorithms";
    var str2 = "";
    ```

    * The following number should be returned:

    ```js
    0;
    ```

    * This is consistent with the behavior of the built-in `indexOf` method when used on strings e.g. `"algorithms".indexOf("") === 0`

    * You may not use the built-in `indexOf` method.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
