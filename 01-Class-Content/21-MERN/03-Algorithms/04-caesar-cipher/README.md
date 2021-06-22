# Caesar Cipher

In this activity you will be writing code to create a function that takes in a string and an offset integer. Your function should return a new string with characters shifted up by the offset. If you're unfamiliar with Caesar Cipher, spend a few minutes reading over the [Wikipedia page on Caesar Cipher](https://en.wikipedia.org/wiki/Caesar_cipher).

## Instructions

* Open [Unsolved/caesar-cipher.js](Unsolved/caesar-cipher.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `caesarCipher` function to achieve the following:

    * Return a new string with characters shifted up by the offset. The characters in the new string should maintain the same casing as the original. Assume the provided string will only contain alphabetical characters and spaces.

    * For example, if given the following string and offset:

    ```js
    var str = "Hello World";
    var offset = 1;
    ```

    * The following should be returned:

    ```js
    "Ifmmp Xpsme";
    ```

    * Since every character has been shifted up to the next character in the alphabet.

    * Given the following string and offset:

    ```js
    var str = "Ifmmp Xpsme";
    var offset = -1;
    ```

    * The following should be returned:

    ```js
    "Hello World";
    ```

    * Since a every character has been shifted _down_ to the _previous_ character in the alphabet. This means by using a negative offset, you can reverse a previously encoded string.

    * Given the following string and offset:

    ```js
    var str = "Goodbye";
    var offset = 28;
    ```

    * The following should be returned:

    ```js
    "Iqqfdag";
    ```

    * Since each character has been shifted up in the alphabet by 28. As there are only 26 letters in the alphabet, the offset of 2 is used instead.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Spend a few minutes reading up on [Caesar_cipher](https://en.wikipedia.org/wiki/Caesar_cipher) before beginning this activity.

* Before writing any code, pseudocode out the logic you'll need for different parts of this activity.
