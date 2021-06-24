**What we covered/Objectives:** 

- Get introduced to each other and the team.
- To confirm that students have completed all required pre-work (software + tools installation)
- To introduce basic terminal/bash commands
- To create a basic HTML page


### Terminal Commands:

- `cd` - changes to home directory
- `cd ~` - changes to home directorymkdi
- `cd <directory_name>` - changes to directory_name
- `cd ..` - changes up by one directory
- `cd ../..` - changes up by two directories
- `ls` - show files and directory names
- `ls -l` - show files and directory names in list format
- `ls -la` - show all files and directory names in list format (even hidden files and directories)
- `pwd` - prints current directory
- `touch <file_name>` - creates a new file
- `mkdir <directory_name>` - creates a new directory
- `mkdir <dir_name_1> <dir_name_2>` - creates two new directories at the same level
- `mkdir -p <dir_name_1>/<dir_name_2>` - creates dir_name_1 and inside it, creates dir_name_2
- `rmdir <dir_name>` - removes a dir_name if and only if dir_name is empty
- `rm -rf <dir_name>` - deletes an entire directory, subdirectories and files recursively
- `code .` - opens vs code using the current directory as the source
- `code <dir_name>` - opens vs code using <dir_name> as the source
- `open .` - opens the folder or file in the finder window (mac)
- `explorer .` - opens the folder or file in the explorer window (windows)

Tip: if you press tab after writing a couple of characters bash (terminal) is going to autocompletes the command, directory or filename

---

### HTML Tags:

```jsx
<!Doctype html>
```

- tells the browser that we are using html 5 and the document is an html page

```jsx
<html></html>
```

- the holder of our html document

```jsx
<head></head>
```

- here we are html tags so the browser can load them first. Examples of this are:

```jsx
<script></script>
```

- holds our JavaScript script
- We can write JavaScript between <script></script> and the browser is going to run it. I don’t recommend it unless you want to test something fast. We are gonna cover this later in the course
- src=”{url}” - tells the browser where the JavaScript file resides
- type=”text/javascript” - tells the browser that we are running JavaScript. Back in the day browsers supported other types of languages like VBScript but JavaScript won the war. :-)

```jsx
<link rel="stylesheet" type="text/css" href="#"> 
```

- holds our css document
- rel=”stylesheet” - attribute that tells the browser this link is a stylesheet
- type=”text/css” - attribute that tells the browser we are going to use css to style our page
- href=”{url}” - attribute that tells the browser where our css resides

```jsx
<style></style>
```

- inside this tag we can use CSS language to style our page

```jsx
<title></title>
```

- Sets the title of the document

```jsx
<body></body>
```

- here we are going to write html tags that our users can see in the browser. Examples of this are

```jsx
<h1></h1>
<h2></h2>
<h3></h3>
<h4></h4>
<h5></h5>
<h6></h6>
```

- for headings

```jsx
<a></a>
```

- creates a link
- href={url} - attribute for the a tag that sets the url we want the link to point to
- target=”_blank” - attribute that forces the link to open in a new tab

```
<img />
```

- shows an image in a browser
- src={url} - attribute for the img tag that tells the browser where the image resides

```
<ul>
	<li></li>
	<li></li>
</ul>
```

- holder for an unordered list
- shows a list item. IMPORTANT: This needs to be inside of `<ol> or <ul>`

```
<ol>
	<li></li>
	<li></li>
</ol>
```

- holder for an ordered list
- `<li>`
- shows a list item. IMPORTANT: This needs to be inside of `<ol> or <ul>`

```
<div></div>
```

- container of holder of other html. This is used a lot for positioning elements in css

```
<p></p>
```

- used to write paragraphs

```
<br> 
```

- used for line breaks

```
<video></video>
```

- for videos

```
<audio></audio>
```

- for audios

```
<header></header>
```

- container for header

```
<nav></nav>
```

- container for navigation

```
<footer></footer>
```

- container for footer

```
<form></form>
```

- container of a form

```
<input></input>
```

- creates different types of inputs for the page

```
<label></label>
```

- used for writing text, used a lot at the side of inputs

```
<button></button>
```

- use for submit forms, or doing any type of clickable event

```
<textarea></textarea>
```

- creates a large input box, a good example of this is when a user needs to leave a review

*Note: Molly’s favorite HTML shortcut: when creating a new html open a page and type `!` then hit ENTER you will have an auto populated HTML doc.*

---

Take Aways: 

- This is HARD this is why devs get paid the big bucks.
- You've gotta put in the hours. This program is only going to provide you with the tools. YOU have to do the work.
- You can do it! Just dedicate the time! Everyone can code and everyone's ramp is going to be different. Focus on your ramp.

