# RPG TDD

In this activity, you will write tests outlining the expected functionality for the RPG game we created in the first activity `RPG-Prototypes`.

## Instructions

* Navigate to [Unsolved/](Unsolved/) in your command line and run `npm install`.

* Open the [Unsolved/rpg-tdd.js](Unsolved/rpg-tdd.js) file and take a moment to examine the code.
  
  * It is the `Character` constructor function from our first RPG activity. 

* Now open the [Unsolved/test/rpg-tdd.test.js](Unsolved/test/rpg-tdd.test.js) file.

  * This file contains a `test` block for the `Character` constructor.

* Write code for the `test` block with the following:

  * Create a new character instance with a `name`, `strength`, and `hitpoints` for our testing purposes.

  * Create a test that checks if the `name` is a `string`

  * Create a test that checks if the `strength` and `hitpoints` are `numbers`

  * Create a test that checks if the `hitpoints` is greater than the `strength`

* To check if everything was done correctly, run `npm test` in your command line. All tests should be passing!

## Hint(s)

* You may need to consult [the Jest documentation](https://jestjs.io/docs/en/using-matchers) for the appropriate matchers and its usage.  

## Bonus

* Write a test that will check whether the character is alive or not, i.e. the `isAlive()` method.