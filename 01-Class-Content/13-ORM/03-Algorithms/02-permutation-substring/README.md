# Permutation Substring

In this activity you will be writing code to create a function that takes in two strings and returns true if the second string is a substring of any permutation (combination of characters in) the first string.

## Instructions

* Open [Unsolved/permutation-substring.js](Unsolved/permutation-substring.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `permuationSubstring` function to achieve the following:

    * Return true if the second string (`sub`) is a substring of any permutation (combination of characters in) the first string. Otherwise return false.

    * In other words, if all of the characters and their quantities in the second string exist in the first string, return true, else return false.

    * For example, given the following strings:

    ```js
    var str = "smapnuer";
    var sub = "super"; // the first string contains all of the characters needed to make the second
    ```

    * The following should be returned:

    ```js
    true
    ```

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* If this problem is too difficult, practice the previous `is-unique` and `is-anagram` problems.
