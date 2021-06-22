// =============================================================
// PART 1

function MiniBank(balance) {
  this.balance = balance;
  this.getBalance = function() {
    return this.balance;
  };
    // Add a `setBalance()` function
    // YOUR CODE HERE
    //

    // Add a `deposit()` function
    // YOUR CODE HERE
    //

    // Add a `withdraw()` function
    // YOUR CODE HERE
    //

    this.printBalance = function() {
      console.log(`Balance: ${this.getBalance()}`);
    };
}

// =============================================================
// PART 2

// Create a new `bank` object

// Print the `bank` balance

// Deposit some money and then print the `bank` balance

// Withdraw some money and then print the `bank` balance
