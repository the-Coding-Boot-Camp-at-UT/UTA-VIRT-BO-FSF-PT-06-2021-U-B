# Countdown Timer

In this activity, you will create a timer that will count down from 5 and display a message when it hits 0. 

## Instructions

* Open [index.html](Unsolved/index.html) and examine the HTML code in the `<body>`.

* Open [script.js](Unsolved/assets/js/script.js) and complete the `countdown()` function that will count down from 5.

  * Complete the `setInterval()` method to call a function to be executed every 1000 milliseconds

  * As long as the `timeLeft` is greater than 1, set the `textContent` of `timerEl` to show the remaining seconds, and decrement `timeLeft` by 1.

  * Once the `timeLeft` gets to 0, set the `textContent` of `timerEl` to an empty string, use `clearInterval()` to stop the timer, and call the `displayMessage()` function.

## Hint(s)

* Look at the `displayMessage()` function to see an example of how to use `setInterval()` and `clearInterval()`.

* You can also refer to the MDN Web Docs on [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) and [clearInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/clearInterval) for more information.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.