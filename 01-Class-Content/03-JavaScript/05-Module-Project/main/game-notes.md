## MODULE 3 GAME LOGIC
​
1. Player starts with money, HP, and attack values
​
2. Computer chooses next robot in list of opponents
​
  * If no more robots exist, player wins, go to **5**
​
3. Computer randomly chooses turn order
​
  * If player's turn, ask to `attack` or `run`
​
    * If `run`, lose money, skip to **4**
​
    * If `attack`, randomly deduct opponent's HP based on player's attack power
​
      * If opponent is out of HP, player receives money, skip to **4**
​
  * If opponent's turn, randomly deduct HP from player based on opponent's attack power
​
    * If player is out of HP, they lose, go to **5**
​
  * Repeat turns
​
4. Ask player if they would like to shop
​
  * If `yes`, ask player if they want to `refill` HP, `upgrade` attack power, or `exit`
​
    * If `refill` or `upgrade`, check if player can afford option, then deduct funds
​
  * Go to **2**
​
5. Display win/lose message and money total and save in localStorage
​
6. Ask player if they want to play again
​
  * If `yes`, reset game state and go to **2**