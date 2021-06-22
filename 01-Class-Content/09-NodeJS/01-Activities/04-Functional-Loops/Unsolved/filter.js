const originalArray = [1, 5, 8, 3, 10];

const evenNumbers = originalArray.filter(function(data) {
  if (data % 2 === 0) {
    return true;
  }
});

console.log(originalArray);
console.log(evenNumbers);

const isPrime = num => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num !== 1;
};

// Complete the following

// 1. A filter that runs through the `originalArray` and creates a new array `primeArray` containing only its prime numbers
// Use the `isPrime` function provided above to help with this
//
// YOUR CODE HERE
//
console.log(primeArray);

// 2. A filter that runs through the `originalArray` and creates a new array `moreThan5Array` containing only its numbers larger than 5
//
// YOUR CODE HERE
//
console.log(moreThan5Array);

// Bonus: Use arrow functions as callbacks!
