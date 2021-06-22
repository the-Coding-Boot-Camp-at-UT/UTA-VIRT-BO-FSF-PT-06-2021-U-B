# RPG Prototypes

In this activity, you will generate RPG characters using constructors and prototypes.

## Instructions

* Open the [Unsolved/rpg-prototypes.js](Unsolved/rpg-prototypes.js) file.

* Create a constructor function called `Character` that takes in 3 arguments and assigns them to the appropriate keys:

  * `name`

  * `strength`

  * `hitpoints`

* Create 3 prototype methods:

  * `printStats()`: Function which prints all of the stats for a character

  * `isAlive()`: Function which prints whether or not this character is alive by determining whether their hitpoints are above or below zero.

  * `attack()`: Function which takes in a second character and subtracts this character's strength from their hitpoints.
