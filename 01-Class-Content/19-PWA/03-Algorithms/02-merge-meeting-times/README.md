# Merge Meeting Times

In this activity you will be writing code to create a function that takes in a 2D array of meeting times, with each sub array containing two integers representing a meeting's start and end time. Return a new 2D array of collapsed meeting times, e.g. combine sub arrays where meeting blocks overlap to reflect the combined start and end time.

## Instructions

* Open [Unsolved/merge-meeting-times.js](Unsolved/merge-meeting-times.js) in your code editor -- **this is the only file you will modify in this activity.**

  * In this file you will be writing code in the body of the `mergeMeetingTimes` function to achieve the following:

    * Return a new 2D array containing combined meeting times

    * For example, given the following array:

    ```js
    var arr = [[ 1, 3 ], [ 2, 4 ]];
    ```

    * The following should be returned:

    ```js
    [[ 1, 4 ]];
    ```

    * Since the second meeting begins (`2`) while the first meeting is still in session (`1` to `3`), we can combine these meeting blocks into a `1` to `4` block. Giving us `[[ 1, 4 ]]` as our answer.

    * Meeting blocks won't necessarily be provided in sorted order.

    * For example, given the following array:

    ```js
    var arr = [ [ 5, 8 ], [ 1, 4 ], [ 6, 8 ] ];
    ```

    * The following should be returned:

    ```js
    [[1, 4], [5, 8]];
    ```

    * Since the `[ 1, 4 ]` block comes before the `[ 5, 8 ]` and the `[ 6, 8 ]` and doesn't overlap with anything, it should be first sub array in the result. Since `[ 5, 8 ]` and the `[ 6, 8 ]` overlap, they can be merged into `[ 5, 8 ]` since both times fall into this combined range.

    * Assume the provided array will only contain 2 element sub arrays containing integers. Each sub array in the provided array will be in sorted order, ie the first element will always be a start time, the second element will always be an end time coming after.

* You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  * Functions that _pass_ the tests will be denoted with a **green check mark**.

  * Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

* You should begin this problem by sorting the provided 2D array by start times.
