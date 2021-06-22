# Is Anagram

In this activity you will be writing code to create a function that takes in two strings and returns `true` if one string is an [anagram](https://en.wikipedia.org/wiki/Anagram) of another string, otherwise return `false`.

## Instructions

* Open [Unsolved/is-anagram.js](Unsolved/is-anagram.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `isAnagram` function to achieve the following:

    * Return `true` if one string is an anagram of the other string. Otherwise return `false`

      * An anagram is a word or phrase made by rearranging the letters of another word or phrase.

    * You can check if the strings are anagrams of each other by checking to see if any permutation (combination of letters in) of the first string is equal to the second string.

    * For example, given the following strings:

    ```js
    var strA = "nnjjdyus";
    var strB = "njdnsjyu";
    ```

    * The following should be returned:

    ```js
    true
    ```

    * Given the following strings:

    ```js
    var strA = "tacocat";
    var strB = "ctatocato";
    ```

    * The following should be returned:

    ```js
    false
    ```

    * You may assume the string will contain all lower-cased letters.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* You can approach this problem by trying to find out if both strings are the same length and contain the same letters.
