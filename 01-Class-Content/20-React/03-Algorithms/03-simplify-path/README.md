# Simplify Path

In this activity you will be writing code to create a function that takes in a string representing an absolute file path and simplifies it, similar to `path.join`.

## Instructions

* Open [Unsolved/simplify-path.js](Unsolved/simplify-path.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `simplifyPath` function to achieve the following:

    * Return a simplified canonical version of the file path.

    * For example, if given the following path:

    ```js
    var path = "/home/";
    ```

    * The following should be returned:

    ```js
    "/home";
    ```

    * Since the trailing forward slash isn't necessary.

    * Given the following path:

    ```js
    var path = "/../";
    ```

    * The following should be returned:

    ```js
    "/";
    ```

    * Since there's no way to `cd ..` from the root directory.

    * Given the following path:

    ```js
    var path = "/a/./b/../../c/";
    ```

    * The following should be returned:

    ```js
    "/c";
    ```

    * Since we start at folder `a`, cd in folder `b` which is inside of `a`. Then we come up one level, back to `a`, then come up another level, up to the root, then go into `c` which is a the root level.

    * Given the following path:

    ```js
    var path = "/a/../../b/../c//.//";
    ```

    * The following should be returned:

    ```js
    "/c";
    ```

    * Same as the previous example, but consecutive `/`s are collapsed into one `/` and a single `.` alone doesn't change directories.

    * Given the following path:

    ```js
    var path = "/a/b/c/d/..";
    ```

    * The following should be returned:

    ```js
    "/a/b/c";
    ```

    * Since we cd'd into `/a/b/c/d/` and then came up one directory.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* Spend some time examining the examples provided here to make sure you understand file paths. Feel free to experiment in your terminal to see how changing directories will affect your folder location.
