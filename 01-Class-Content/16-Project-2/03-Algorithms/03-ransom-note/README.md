# Ransom Note

In this activity you will be writing code to create a function that takes in two strings: a ransom note and a magazine. You will be checking if the words in the ransom note could have been clipped from the magazine, e.g. if every instance of each word in the second string is found in the first string, return `true`, else return `false`.

## Instructions

* Open [Unsolved/ransom-note.js](Unsolved/ransom-note.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `ransomNote` function to achieve the following:

    * If every instance of each word in the second string is found in the first string, return `true`, else return `false`.

    * For example, given the following strings:

    ```js
    var magazine = "hello world";
    var note = "hello";
    ```

    * The following should be returned:

    ```js
    true;
    ```

    * If given the following strings:

    ```js
    var magazine = "Whats so amazing that keeps us stargazing";
    var note = "stargazing whats keeps us so amazing";
    ```

    * The following should be returned:

    ```js
    false;
    ```

    * Since the word "Whats" has a different case in each string.

    * Assume neither string will be empty and that you won't need to deal with punctuation, but you will need to worry about casing.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.
