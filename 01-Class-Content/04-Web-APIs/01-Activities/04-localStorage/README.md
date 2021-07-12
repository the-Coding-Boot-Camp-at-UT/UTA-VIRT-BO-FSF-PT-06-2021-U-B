# Local Storage

In this activity, you have been provided with a sign-up form that successfully submits an email and password. Your job is to write code that saves the email and password to localStorage and renders the last submission to the page.

## Instructions

* Open [script.js](Unsolved/assets/js/script.js) in your IDE.

* In the `renderLastRegistered()` function:

  * Retrieve the last email and password from localStorage.
  
  * If the last registered is null, return early from this function.
  
  * Otherwise, set the text of the `userEmailSpan` and `userPasswordSpan` to their corresponding values from localStorage.

* In the `signUpButton` event listener:

  * Save the email and password to localStorage.

  * Render the last registered email and password.

---
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.