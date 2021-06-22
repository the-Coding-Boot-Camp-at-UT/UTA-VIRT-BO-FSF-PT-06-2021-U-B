# MiniBank

In this activity, you will use objects to create a mini banking application.

## Instructions

### Part 1 - Add methods and properties to `MiniBank`

Open [Unsolved/minibank.js](Unsolved/minibank.js) and update the `MiniBank` constructor function with the following methods and properties:

* Add a `setBalance()` function. 

   * This function should receive a `value` parameter and assign it to the `balance` property of `MiniBank`.

* Add a `deposit()` function. 

   * This function should receive a `value` parameter and call `setBalance()` to update the `balance` property after adding the `value` amount.

   * Log the amount that was deposited in the console, i.e. `Deposited 85!`

* Write a `withdraw()` function. 
   
   * This function should receive a `value` parameter and call `setBalance()` to update the `balance` property after subtracting the `value` amount.

   * Log the amount that was withdrawn in the console, i.e. `Withdrew 20!`

### Part 2 - Create and use a `MiniBank` instance

* Create a new `bank` object using the `MiniBank` constructor function.

* Print the `bank` balance.

* Deposit some money into the `bank` object.

* Print the `bank` balance.

* Withdraw some money from the `bank` object.

* Print the `bank` balance.

## Hint(s)

* Before you can call the `setBalance()` function, you will need to call the `getBalance()` function to add or subtract the `value` amount and get a new balance. 

## Bonus

* Add code to throw an error if the user tries to withdraw more money than they have, or try to deposit or withdraw values that aren't positive numbers.
