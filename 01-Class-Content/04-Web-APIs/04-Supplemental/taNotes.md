I know ya'll are feeling frustrated and confused. Take a deep breath! 

**Learning Objectives:** 

- Understanding the window and DOM
- Understanding Parent and Children nodes
- Manipulating the DOM
- Moar JS

---

## What is an API?:

A set of functions and procedures allowing the creation of applications that access the features or data of an operating system, application, or other service.

[What is an API? In English, please.](https://www.freecodecamp.org/news/what-is-an-api-in-english-please-b880a3214a82/)

---
## Window:

(Or Browser Model Object (BOM)) The window is what is loaded first and is supported by all browsers. This allows JavaScript to communicate with the browser. The document or (DOM) is what is loaded inside the window. Some important things to remember:

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

**Some examples of properties of the DOM you can manipulate:**

**innerHTML** - using this you can add html into an element

```jsx
div = document.querySelector("div")

div.innerHTML = "<h2>I am an element(h2) inside of another element(div)</h2>"
//this will add an h2 the first div on the page
```

**innerText** - using this you can add text into an element

```jsx
div = document.querySelector("div")

div.innerText = "Hello World"
//this will change the text of the first div on the page
```
---
## document.getElementById():

The Document method getElementById() returns an Element object representing the element whose id property matches the specified string. Since element IDs are required to be unique if specified, they're a useful way to get access to a specific element quickly.

```jsx
//find the element in your HTML with the id of myDiv and stores it in myDiv variable.
let myDiv = document.getElementById("myDiv")
```

[Document.getElementById()](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementById)

---
## document.querySelector():

Since in the above we learned how to pinpoint certain elements there is an easier way to find that element. 

This will select ALL the h2s in the html.

 *Note: if you try using an innerHTML or innerText it will return in an array.* 

```jsx
document.querySelectorAll('h2')
```

We can also grab elements by their id or class name. 

```jsx
document.querySelector("#myName")
//this will select the element with the id= "myName"
document.querySelector(".myName")
//this will select the element with the class= "myName"
```

---
## Element Methods:

**setAttribute():** 

You can set attributes to certain elements in the HTML. This can be various things from classes to src types to data types.

```jsx
let myDiv = document.querySelector("#myDiv")
myDiv.setAttribute('style', "squareStyle")
//this will give the div with id "myDiv a style of "squareStyle"
myDiv.setAttribute("data", "letter")
//this will give the div with id "myDiv a data tag of "letter"
myDiv.setAttribute("href", "http://khaledipsum.com/")
//this will give the div with id "myDiv a href tag of the HTML.
```

**append():**

This will append an element to an element inside the body or the body itself. 

```jsx
let myDiv = document.querySelector("#myDiv")
newBtn = document.createElement("button")
newBtn.innerText = "I am a new button"

myDiv.append(newBtn)
//this will add a button to myDiv with the text: "I am a new button"
```

**appendChild():**

This will append the child of an element. *Imagine this example had a div inside the div with an id of myDiv*

```jsx
let myDiv = document.querySelector("#myDiv")
newBtn = document.createElement("button")

myDiv.appendChild(newBtn)
//this will add a button to the child div of myDiv
```

You will able to continue to manipulate elements using other property element methods. Take a look at some of them here:

Read more: [Element](https://developer.mozilla.org/en-US/docs/Web/API/Element)

---
## setInterval():

This is how we set timers in JS. This is a JS method available for you to use. Typically we use these inside of other functions:

```jsx
//setting a global variable for my timer to count down from
var seconds = 10

function setTimer(){
	var myTimer = setInterval(function(){
		//decrementing timer
		seconds--;

		//tell your timer to do something when the time is up
		if (seconds === 0){
			console.log("Times up!")
			//this stops the interval from continuing to count down
			clearInterval(myTimer)
		}
	//Since this is in milliseconds we need it to count seconds
	}, 1000)
	
} 
```

Read more: [WindowOrWorkerGlobalScope.setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)

---
**Learning Objectives:**

- event listener introduction:
    - click, keydown, and change.
- Prevent default form behavior with `event.preventDefault()`.
- Stop the propagation of events

---

## onclick Events:

The onclick JavaScript event (also a document property) occurs when the user clicks on an element. It runs a specified line of code when you click an HTML object that has the onclick attribute. ie: if you have a button, what happens when you click it? An onclick event happens. 

*This can be done in multiple ways.* 

Below (as will be seen again when we get into react) you can add it like an attribute:

```jsx
<button onclick="btnClick()">Click Me!</button>
//this onclick= is where the name of your function should go. 
```

Above is where your event is called. You would have your function written in the script like so: 

```jsx
<script>

function btnClick() {
console.log("I was clicked!")
};

//this button will now console.log "I was clicked!"

</script>
```

You can also just write this in the script file without adding an attribute in the HTML by using an eventListener method like below: 

```jsx
let myDiv = document.querySelector("#myDiv")

myDiv.addEventListener("click", function(){
console.log("I was clicked!")
});

//element with the ID myDiv when clicked will console.log "I was clicked!"

```

Read more about onclick events here: 

[onclick Event](https://www.w3schools.com/jsreF/event_onclick.asp)

---
## Keydown Event:

This is another event that happens when a user presses a key on the keyboard. Unlike the `keypress` event, the keydown event is fired for all keys, regardless of whether they produce a character value.

This can also be used in various ways like an onclick. It can be an attribute of an HTML element: 

```jsx
<input type="text" onkeydown="keyPrss()"></input>
//The function keyPrss() will fire when a key is pressed inside this input
```

Above is where the function is called. Below is what the script would look like for that: 

```jsx
<script>

function keyPrss() {
console.log("A key was pressed!")
};

//When you type in this input element it will console: "A key was pressed"

</script>
```

You can also just write this in the script file without adding an attribute in the HTML by using an eventListener method like below: 

```jsx
let txtBox = document.querySelector("#txtBox")

txtBox.addEventListener("keydown", function(){
	console.log("A key was pressed!")
});

//element with the ID txtBox when typed in will console.log "A key was pressed!"
```

---
## Other Types of events:

There are various types of events. As seen above we can use the onclick and keydown. There are also events for types of keys typed and types of mouse clicks. 

Read more here:

[Mouse events basics](https://javascript.info/mouse-events-basics)

And here: 

[Event reference](https://developer.mozilla.org/en-US/docs/Web/Events)

---
## getElementById() - Refresh:

This method can be used to pinpoint a specific element by its id. 

```jsx
document.getElementById("myDiv");
//we can store this in a variable or maniputlate it by calling it by it's id
```

---
## .addEventListener():

The addEventListener() method attaches an event handler to the specified element. We can use it with any element. and attach it to an element in the HTML like so: 

```jsx
let myBox = document.querySelector("#myBox")

myBox.addEventListener("click", myFunction);

function myFunction() {
  myBox.innerText = "Hello World";
}

//this will replace the existing content with "Hello World" to the element with the ID myBox
```

Read more here: 

[HTML DOM addEventListener() Method](https://www.w3schools.com/jsref/met_document_addeventlistener.asp)

---
## preventDefault():

This is another event method. The preventDefault() method cancels the event if it is cancelable, meaning that the default action that belongs to the event will not occur. You will see this often with forms. 

This has to do with the submit of a form. We use the following: 

*Note we have to pass the event or also commonly seen as just e into the function in order for this to run successfully.* 

```jsx
submitEl = doucment.querySelector("#submit")

submitEl.addEventListener('click', function(event) {
event.preventDefault()
//this will prevent the form from submitting too soon. 

}
```
---
## forEach():

The forEach() method calls a function once for each element in an array, in order. You will see this acts similar to a for loop. The forEach() method below is using an anonymous arrow function. 

```jsx
nameArray = ['Molly', 'Jeff', 'Pumpkin']

nameArray.forEach(name => console.log(name))
```
---
## Event Propagation:

This is the blanket term for both event bubbling and event capturing. When an event happens on an element, it first runs the handlers on it, then on its parent, then all the way up on other ancestors.

This happens when you have nested onclick events. (Buttons inside of buttons) You can use this method to focus only on one onclick instead of initiating all the onclicks. 

There is a method you can use to stop the propagation called: stopPropagation(). Much like preventDefault this can be used: 

```jsx
event.stopPropagation();
```

Read more here: 

[A simplified explanation of event propagation in JavaScript.](https://www.freecodecamp.org/news/a-simplified-explanation-of-event-propagation-in-javascript-f9de7961a06e/)

---
## currentTarget:

The currentTarget read-only property of the event interface that identifies the current target for the event, as the event traverses the DOM. It always refers to the element to which the event handler has been attached, as opposed to Event.target, which identifies the element on which the event occurred and which may be its descendant.

*Note: this is really handy for onclick events and can be used to pinpoint specific values within elements.*

```jsx
event.currentTarget

or 

event.tagret
```

Try it out here:

[currentTarget Event Property](https://www.w3schools.com/jsref/event_currenttarget.asp)

---
## .matches():

The matches() method checks to see if the Element would be selected by the provided selectorString -- in other words -- checks if the element "is" the selector.

This works similar to querySelector()n method. We can use it like so: 

```jsx
element.matches("img") //will find all elements that have the img tag
element.matches(".cat")//will find all elements with the class cat
element.matches("#dog")//will find THE element with the id dog (don't forget you can only use an id once in the code)
```

Read more here:

[Element.matches()](https://developer.mozilla.org/en-US/docs/Web/API/Element/matches)

---
## .slice():

he slice() method returns a shallow copy of a portion of an array into a new array object. This can be used in ways to select from begin to end where begin and end represent the index of items in that array. 

*Note: The original array will not be modified.*

```jsx
const nameArray = ["Molly", "Jeff", "Pumpkin"]

console.log(nameArray.slice(1))
//will return "Jeff" , "Pumpkin" 

```

.slice can take in 2 arguments to slice the array at the end as well.

```jsx
const nameArray = ["Molly", "Jeff", "Pumpkin", "Mary", "Olaf", "Alyson"]

console.log(nameArray.slice(1,5))
//will return "Jeff" , "Pumpkin", "Mary","Olaf"
```
---
Learning Objectives: 

- Use local storage and session storage.
- Describe the differences between the two.
- Identify when client side storage is the right solution.
- Use all of the units concepts to build some apps!

---

## localStorage Method:

The read-only localStorage property allows you to access a Storage object for the Document's origin; the stored data is saved across browser sessions. To use local storage you must first get the item *from* localStorage (which will be nothing), and then set the item *in* local storage to a key and value. 

Here is an example of how to use this method. Variable counterStore stores "count"

```jsx
let counterStore = localStorage.getItem("count")
```

Set item will then update the item with a key and value. The key here is "count" and the value is the variable count. 

```jsx
let count = 5

//giving it a name, and the value I want to store
localStorage.setItem("count",count)
```

**Using objects with localStorage:** 

In order to save an object into local storage you will have to store it as a JSON object. We use the following code to do that: 

```jsx
let user = {
	name:"Molly",
	pet:"Cat",
	car:true
}

localStorage.setItem('user', JSON.stringify(user))
```

Then when we get it from local storage we'll want to use JSON.parse method:

```jsx
let userData = JSON.parse(localStorage.getItem('user')

//the following will console.log the items saved above into local storage. Now I can do whatever I want with these variables.
console.log(userData.name);
console.log(userData.pet);
console.log(userData.car);
```

*Hint: when using local storage I find it best to set variables in local storage first, then get them and update them later.* 

---
## Working with Local Storage in the Browser:

Check out the "Application" tab in your console. Then on the left side you can see "Local Storage" in the side then the link under that like picture below is how to access the local storage for your page.

![image](https://user-images.githubusercontent.com/29104770/125373882-81859600-e34b-11eb-9338-40e228775ca3.png)


---
## To delete items in your Local Storage:

You can click over the key value pair in the console, then the x picture below: 

![image](https://user-images.githubusercontent.com/29104770/125373944-982bed00-e34b-11eb-8bb0-5c57b24f043b.png)


---
## .trim():

This is another method that trims the extra spaces so there are not spaces in your value. 

```jsx
let name = document.querySelector("#name).value.trim()
//this will remove any spaces around the value of name
```
---
## init():

This is NOT a prebuilt JS method, but commonly at the bottom of a JS file you'll find how the function is called. Typically, starts with an init() function: 

```jsx
function init(){
	fireFirstFunction()
}

init()
```
---
## Data:

Sometimes we'll want to add information to elements that we don't necessarily want the user to see, but we want to add so we can target it later. We can do this by adding a data attribute to the element. 

We can attach data to an element by doing the below: 

```jsx
let magnet = document.querySelector("#magnet")

magenet.setAttribute("data-letter", "A");
```

*Note here we are adding a ABC letter to a fridge magnet. How would we add all 26 letters without doing so manually?* 

We can later use that data with the .dataset: 

```jsx
console.log(magent.dataset.letter)
//this will console "A"
```