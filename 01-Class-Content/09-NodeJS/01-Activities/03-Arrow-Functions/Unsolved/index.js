// 1. funnyCase makes each letter in a string the opposite case of the letter before
var funnyCase = function(string) {
  var newString = '';
  for (var i = 0; i < string.length; i++) {
    if (i % 2 === 0) newString += string[i].toLowerCase();
    else newString += string[i].toUpperCase();
  }
  return newString;
};

console.log('1. Funny Case:');
// Prints `yOu cAn't jUsT Do wHaTeVeR YoU WaNt aLl tHe tImE!`
console.log(funnyCase("You can't just do whatever you want all the time!\n"));

// --------------------------------------------------------------------------

// 2. Map lets you loop over an array and modify the elements inside
var map = function(arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    result.push(cb(currentElement, index));
  }
  return result;
};

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var doubled = map(numbers, function(element) {
  return element * 2;
});

console.log('2. Doubled Numbers:');
// Prints `[ 2, 4, 6, 8, 10, 12, 14, 16, 18, 20 ]`
console.log(doubled);

// --------------------------------------------------------------------------

// 3. Filter lets you loop over an array and remove elements
var filter = function(arr, cb) {
  var result = [];
  for (var index = 0; index < arr.length; index++) {
    var currentElement = arr[index];
    if (cb(currentElement, index)) {
      result.push(currentElement);
    }
  }
  return result;
};

var evenNumbers = filter(numbers, function(currentElement) {
  return currentElement % 2 === 0;
});

console.log('\n3. Even Numbers:');
// Prints `[ 2, 4, 6, 8, 10 ]`
console.log(evenNumbers);

// --------------------------------------------------------------------------

// 4. netflixQueue is an object for managing your Netflix queue
var netflixQueue = {
  queue: [
    'Mr. Nobody',
    'The Matrix',
    'Eternal Sunshine of the Spotless Mind',
    'Fight Club'
  ],
  watchMovie: function() {
    this.queue.pop();
  },
  addMovie: function(movie) {
    this.queue.unshift(movie);
  },
  printQueue: function() {
    var list = '';
    for (var i = this.queue.length - 1; i >= 0; i--) {
      var currentMovie = this.queue[i];
      list += this.queue.length - i + '. ' + currentMovie + '\n';
    }
    console.log(list);
  }
};

console.log('\n4.Printing movie queue:\n');
netflixQueue.printQueue();
netflixQueue.watchMovie();
console.log('\nWatched a movie!\n');
console.log('Printing movie queue:\n');
netflixQueue.printQueue();
console.log('\nAdding a movie!\n');
netflixQueue.addMovie('Black Swan');
console.log('Printing movie queue:\n');
netflixQueue.printQueue();
