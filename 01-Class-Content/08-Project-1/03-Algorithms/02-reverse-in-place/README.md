# Reverse In Place

In this activity you will be writing code to create a function that takes an array and reverses the array in place without using the built-in `reverse` method.

## Instructions

- Open [Unsolved/reverse-in-place.js](Unsolved/reverse-in-place.js) in your code editor -- **this is the only file you will modify in this activity.**

  - In this file you will be writing code in the body of the `reverseInPlace` function to achieve the following:

    - Reverse the array in place without using the built-in `reverse` method.

    - To reverse an array "in place" means to reverse the original array without creating a brand new array. This can be achieved by swapping elements within the original array.

    - Return the array after it has been reversed.

    - e.g. given the following array:

    ```js
    var arr = [2, 4, 6, 8];
    ```

    - The original `arr` array should be returned, but with it's elements in reverse order.

    ```js
    [8, 6, 4, 2]; // this still refers to the original arr array
    ```

- You can check to see if your function works properly by opening [Unsolved/test.html](Unsolved/test.html) in your web browser.

  - Functions that _pass_ the tests will be denoted with a **green check mark**.

  - Functions that _fail_ the tests will be denoted with a **red x and an error message**.

### Hints

- This is easier achieved with a [while-loop](https://www.w3schools.com/js/js_loop_while.asp), rather than a for-loop.

- Think about where each element in an array is moved to when an array is reversed.

- See this [StackOverflow Post on swapping array elements](https://stackoverflow.com/questions/872310/javascript-swap-array-elements)
