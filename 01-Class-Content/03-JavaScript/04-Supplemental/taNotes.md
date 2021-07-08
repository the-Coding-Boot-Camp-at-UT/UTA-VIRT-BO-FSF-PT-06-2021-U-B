
A big part of being a developer is learning on the fly! **Don't forget that.** I even learn on the fly in front of you all. Google is my BFF, and documentation is a must. When we send you articles we're beefing up those doc reading skills as that's how it's going to be in the real world.

## Script Tags:

This is how we write JS inside an HTML.

```jsx
<script type="text/javascript">
//JS can go here
</script>
```

This is how you'd link a JS file. 

```jsx
<script type="text/javascript" src="app.js"></script>
```

*Note: We can see examples with script tags in the <head>, in the <body>, and under the <body>. If you are not needing to target an element you can put your script in the top in the head of your html. Most of the time you will be trying to target elements in your html. If the script it as the top it loads first BEFORE the html and thus before the elements. If that is the case you won't be able to target elements. Something to keep in mind when writing JS. I like to keep mine at the bottom under the body.*  

---

## Variables:

There are six data types of variables (these are called primitive). Today we are discussing: Strings, Integers & Booleans.

*Note: the " " or ' ' are important for strings, but they do have to match.* 

```jsx
//these are examples of strings:
var mollyName = "Molly"; 
let jeffName = 'Jeff'; 
const seanName = "Sean"; 

//these are examples of integers: 
var number = 10;
let newNumber = 3; 
const sameNumber = 5; 

//these are examples of booleans: 
var mollyName = true; 
let jeffName = false; 
const seanName = true; 
```

---

### *Some* Native JS Functions:

- alert()
- prompt()
- confirm()

Read more: [Window alert() Method](https://www.w3schools.com/jsref/met_win_alert.asp)

---

## Console Log:

Sometimes devs want to see what the function or line of code is returning. We use the function: console.log() to do that. This is added to the code like the below. 

```jsx
var mollyName = "Molly"; 
let jeffName = 'Jeff'; 
const seanName = "Sean"; 

console.log(mollyName);
console.log(jeffName);
console.log(seanName);
```

When this is added to the code you will be able to open the inspector in Google Chrome and see it with the inspector tool under the console tab. 

You can also ***concatenate*** in JavaScript. For example, if I wanted to make my variables clearer to me I could do the following: 

```jsx
console.log("My name is: " + mollyName)
//or
console.log("My name is: ", jeffName)
```

Concatenating forces a string together with the variable. We will get: `My name is: Molly` in our console for the first one, and `My name is: Jeff` for our second console log. 

---

## If/Else Statements:

This is a conditional statement. Sometimes (often) you'll want to have certain code run depending on a true false statement. 

- Use `if` to specify a block of code to be executed, if a specified condition is true
- Use `else` to specify a block of code to be executed, if the same condition is false

```jsx
if (condition) {

//if this condition is met execute this code

} else {

//if the first condition is not met run this line of code

}
```

---

## Truthy & Falsey:

In JavaScript, a truthy value is a value that is considered true when encountered in a Boolean context. All values are truthy unless they are defined as falsy (i.e., except for false, 0, -0, 0n, "", null, undefined, and NaN).

**Truthy**: Something which evaluates to TRUE.

**Falsey**: Something which evaluates to FALSE.

The following values are **always falsey**:

- `false`
- `0` (zero)
- `''` or `""` (empty string)
- `null`
- `undefined`
- `NaN`

Everything else is **truthy**. That includes:

- `'0'` (a string containing a single zero)
- `'false'` (a string containing the text “false”)
- `[]` (an empty array)
- `{}` (an empty object)
- `function(){}` (an “empty” function)

---

## **== vs ===**

double equal checks the values. Triple equal checks the data type and the value ie. 

```jsx
var ten = "10"
var numTen = 10;

//Do these values match? 
if (ten == numTen) {
console.log("True")
} else {
console.log("False")
}
//this will return True

//Do these values AND data types match? 
if (ten === numTen) {
console.log("True")
} else {
console.log("False")
}
//this will return False
```
---
## Not Equal?

What if you want a condition based off something that is not equal? 

```jsx
if (userName !== existingName) {
	alter("You need to sign up!")
}
```

In this example I am checking if the user name is already in an array (our fictional database). Then there is some error handling about what to do when that happens. You can use the `!==` which means if this does NOT exactly equal do this. 

---

## typeof:

This will evaluate the data type of something provided. 

```jsx
console.log(typeof 42);
// expected output: "number"

console.log(typeof 'blubber');
// expected output: "string"

console.log(typeof true);
// expected output: "boolean"

console.log(typeof undeclaredVariable);
// expected output: "undefined"
```

Read more: [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)

---

## JS Data Types:

Programming languages all have built-in data structures, but these often differ from one language to another. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. Data types are the kinds of variables you can have. 

The Six Primitive Data Types:

- [undefined](https://developer.mozilla.org/en-US/docs/Glossary/Undefined) : `typeof instance === "**undefined**"`
- [Boolean](https://developer.mozilla.org/en-US/docs/Glossary/Boolean) : `typeof instance === "boolean"`
- [Number](https://developer.mozilla.org/en-US/docs/Glossary/Number) : `typeof instance === "number"`
- [String](https://developer.mozilla.org/en-US/docs/Glossary/String) : `typeof instance === "string"`
- [BigInt](https://developer.mozilla.org/en-US/docs/Glossary/BigInt) : `typeof instance === "bigint"`
- [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol) : `typeof instance === "symbol"`

```jsx
let foo = 42;    // foo is now a number
foo     = 'bar'; // foo is now a string
foo     = true;  // foo is now a boolean
```

Read more: [JavaScript data types and data structures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)

---
## Arrays:

This has the data type of a list. What defines an array is the brackets [ ]. Arrays start with an index of 0. So newStringArray has strings at index (position) 0, 1, and 2. 

Below is an example of some arrays:

```jsx
var newStringArray = ["Molly", "Jeff", "Sean"]
let newIntegerArray = [1, 2, 3]
const newMixedArray = ["Molly", 1, "Jeff", 2"]
```

You can have arrays of strings, integers, and mixed arrays as shown above. *And more...* 

**Array Index:**

Arrays start at an index of 0. The first thing in an array will be index of 0. 

```jsx
console.log(newStringArray[0])
//will console "Molly"

console.log(newStringArray[1])
//will console "Jeff"

console.log(newStringArray[2])
//will console "Sean"

console.log(newStringArray[3])
//will console "undefined" as there is nothing at that index
```

.**indexof() method:** 

will return the index of something in the the array. 

```jsx
var newStringArray = ["Molly", "Jeff", "Sean"]

console.log(newStringArray.indexof("Molly"))
//will return 0

console.log(newStringArray.indexof("Student"))
//will return -1 as "Student" is not a string in the array newStringArray
```

Using **array.length** will identify the length of the array specified. *You will not always know the length of an array.* 

```jsx
console.log(newStringArray.length)
//will show 3 in the console
```
---
## **Easy JS Writing (Without Setting up an HTML):**

If you want to write some JS logic without creating a whole file structure you can write it in here, and then run it. 

Check it out: [repl.it - JavaScript](https://repl.it/languages/javascript)

---

## Some JS Methods:

**.push() method:** 

```jsx
newStringArray.push("Pumpkin")
console.log(newStringArray)
//will return: "Molly" "Jeff" "Sean" "Pumpkin"
```

Will push the string "Pumpkin" into newStringArray. 

**.toLowerCase() method:**

Turning values into lower case is actually pretty important in code. Especially when using ===

ie.

```jsx
let myName = "MOLLY"

myName === "molly" 
//This statement is FALSE
// the === means it MUST match exactly and this IS case sensitive
```

So we would use the method .toLowerCase() to get them to match. 

```jsx
let myName ="MOLLY"
myName = myName.toLowerCase() //to change the value of myName
console.log(myName)
//will print out molly
```

---

## **Incrementing in JS:**

In JS we will want to increment values. There are many ways to do this. 

```jsx
let counter = 0;

//These all mean the same thing
counter = counter +1
counter += 1;
counter++;

//using one of these counter now is incremented by 1
```

---

## **For Loops:**

**Remember this syntax.** This is something you will commonly see when listing out the properties of entire arrays or pinpointing something inside an array. You will use this A LOT. The following code will console the entire array. 

```jsx
for (let i = 0; i < array.length; i++) {
	console.log(array[i])
}
```

"i" can be anything here, but you will see "i" as it's called the iterator. Hence the "i". Most of this really won't change. You'll need to replace the "array" with the array you want to iterate through, but this is what it will look like if you want to write a for loop. 

***Note: the "let" and "var" here are interchangeable.***

Here is an example of a for loop: 

```jsx
let animals = ["Lion", "Tiger", "Bear", "Moose"]

for (let i = 0; i < animals.length; i++) {
	console.log(animals[i])
}

//this is will console log:
//Lion
//Tiger
//Bear
//Moose
```

This is incredibly useful especially if I do not know what is in the array and/or if the array is VERY large. Arrays can be viewed as data sets. You may be working with an array that has a million users in it. This is A LOT easier than writing the following: 

```jsx
let animals = ["Lion", "Tiger", "Bear", "Moose"]

console.log(animals[0])
console.log(animals[1])
console.log(animals[2])
console.log(animals[3])

//this is console log: 
//Lion
//Tiger
//Bear
//Moose

```

For more info: [JavaScript for Loop](https://www.w3schools.com/js/js_loop_for.asp)

And watch this: [JavaScript Loops](https://www.youtube.com/watch?v=s9wW2PpJsmQ)

---

## Pipe Key (Or):

They pipe key is this: `|` we can use this in JS to mean or in conditional statements:

```jsx
//this would pass the condition and make it to the success console.log
let userName = "Molly"

if (userName === "Molly" || "Jeff"){
	console.log("User name is Molly or Jeff")
	console.log("Success!")
} else {
	console.log("fail")
}

//this would pass the condition and make it to the success console.log
let userName = "Jeff"

if (userName === "Molly" || "Jeff"){
	console.log("User name is Molly or Jeff")
	console.log("Success!")
} else {
	console.log("fail")
}

//this would pass the condition and make it to the fail console.log
let userName = "Sean"

if (userName === "Molly" || "Jeff"){
	console.log("User name is Molly or Jeff")
	console.log("Success!")
} else {
	console.log("fail")
}

```

Read this: [Logical OR (||)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_OR)

We can use the same concept with `&&`

Read this: [Logical AND (&&)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_AND)

---

## **Math.random():**

This generates a number between 0 and 1. This will show decimals. 

```jsx
var num = Math.random() 
console.log(num)

//this will return a random decimal between 0 and 1. 
```

If you are looking for a specific whole number in a range you can add some additional parameters to do so. We will use **Math.floor** here to give us a whole number and an additional parameter to give us a wider range. 

```jsx
var num = Math.floor(Math.random() * 10)
console.log(num)

//This example will display a random number between 0 and 9. 
```

Alternatively, we could use **Math.ceil** to give us the very specific parameter of finding a number between 1 and 10. 

```jsx
var num = Math.ceil(Math.random() * 10)
console.log(num)

//This example will display a random number between 1 and 10. 
```

Read more: [Math.random()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random)

---

## **Pseudo Coding (Refresh):**

Often it is really helpful to write out the steps of logic for your program to understand how to begin coding it. I personally like to do this in my HTML or JS files. You will notice that they do have to be in note format to keep them from causing problems in your code. 

`//` is what you would use to note something out in a JS file

`<!-- your HTML -->` is what you would would use to note something out in a HTML file

`/* YOUR CSS */` is how you would note something out in a CSS file

Alternatively, you could write something then highlight it and then type `command` + `/`

(mac) or `windows key` + `/` (windows) *or `?` as molly likes to call it.*

---

## **Function Declaration:**

This is where you create a new function by declaring the function ie. This can be called before the function is written in the code. The code will be read first and this function stored in the code. *Can be used anywhere in the code.*  

```jsx
function printArray() {
	console.log("This is printArray 1")
}
```

Now that we have built the function we need to call it or fire it. Now that we have written it how do we get it to run? You can simple just write the function name. Functions also need to be followed by the (). 

```jsx
printArray()
//This will then console "This is printArray 1"
```
---
## Function Expression:

**Anonymous functions:**

Function that was declared without any named identifier to refer to it. This cannot be run before the function is written in the code. *Cannot be used anywhere in the code.* 

```jsx
const printArrays = function () {
	console.log("This is printArray 2")
}
```

Similarly we need to call this (or fire it) like we would a declared function:

```jsx
printArrays()
//this will console "This is printArray 2" 
```

Sometimes you will want to pass information to your functions. For function to access certain variables they must be global and they must be named inside the function. 

```jsx
let name = "Molly"

function callName () {
	console.log(name)
}
```

You can also pass variable as arguments into functions: 

```jsx
//I am passing an argement here in here using x,y,z they are currently unknown to me
function addNumbers (x,y,z) {
	const result = x+y+z
	console.log(result)
}

//now I can call this like so: 
addNumbers(1,2,3)
//this will log 6
```

---

## Objects:

A variable that can store additional values and methods. Sometimes you'll want to keep your data points together. Say you have a database of people with their locations, names, and what they're known for. Instead of storing these in various arrays you'll store the data in objects.

```jsx
const joanOfArcObject = {
	name: "Joan",
	location: "France",
	knowFor: "Comander of the French Army",
}

//if I wanted to target some specific data I would do the following: 

console.log(joanOfArcObject.name) 
//will console: "Joan"
```

You can also have an object that looks like this: 

```jsx
const joanOfArcObject = {
	"name": "Joan",
	"location": "France",
	"knowFor": "Comander of the French Army",
}

//using the same method you can get the name using the following
console.log(joanOfArcObject.name) 
//or
console.log(joanOfArcObject["name"])

//both will console.log Joan 

```

You can add and remove properties and values and to existing properties and values. 

```jsx
//this creates a new array in the object
joanOfArcObject.pets = []

//this will push a string into the pets array
joanOfArcObject.pets.push("Pumpkin")

//this will delete something from the object
delete joanOfArcObject.pets[0]
//this will delete the string at index 0 of the array which is "Pumpkin"

```

**Functions inside of objects:** 

As we saw in this class we can also store functions inside of objects and call them later. 

```jsx
const car = {
	make: "Toyota",
	model: "Highlander",
	color: "White",
	isWorking: true,
	driveToWork: function () {
		console.log("I drove to work!")
	},
	getTuneUp: function() {
		console.log("I got a tune up!")
	}
}
```

Now that it's written to run it you must access car first. 

```jsx
car.driveToWork()
//this will run the function and console "I drove to Work!"
```
---
## Factory Functions:

This helps build objects for later use. *Note: this must be capitalized this is called PascalCase vs using camelCase.*

```jsx
function PersonFactory(name, age, occupation) {
	return {
		name,
		age,
		occupation
	}
}

//the above is shorthand, and JS translates it to read: 
//		name: name,
//		age: age,
//		occupation: occupation
```

To then use this factory function and build a new "Person" you'd need to run the following code:

```jsx
const jeff = PersonFactory('Jeff', 55, 'Instructor')
```

This then builds a new object: jeff. 

---
## **This:**

The word "this" it used often in JS to target certain objects. The JavaScript this keyword refers to the object it belongs to. Alone this refers to a global object or the window object. 

```jsx
const car = {
  make: "Toyota",
  model: "Highlander",
  color: "Blue",
  showMeInfo: function() {
    console.log(this.make)
  }
}

car.showMeInfo()
//this will console: "Toyota" 
```

Read more: [JavaScript this](https://www.w3schools.com/js/js_this.asp)

Global This: [Global object](https://developer.mozilla.org/en-US/docs/Glossary/Global_object)

---
## Window:

(Or Browser Object Model (BOM)) The window is what is loaded first and is supported by all browsers. This allows JavaScript to communicate with the browser. The document or (DOM) is what is loaded inside the window. Some important things to remember:

- Global variables are properties of the window object.
- Global functions are methods of the window object.

To see the window we can run `console.log(this)` and the entire window object can be seen in the console. 

---
## DOM:

This stands for Document Object Model and it is a property of the window. Today we discussed manipulating the DOM from the console. Since the DOM is just one giant object we can pinpoint specific elements by using their properties. Since the body is a property of the document (DOM) you can manipulate it by using: 

```jsx
document.body
//OR
console.dir(document) 
//this will show the document in an interative list
```

This then allows you to manipulate the elements inside the body. 

```jsx
document.body.h2[0]
//this will pinpoint the first h2 of this html
```