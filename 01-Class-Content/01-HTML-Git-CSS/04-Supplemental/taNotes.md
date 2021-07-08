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

---
## CSS Stuff!

CSS has a lot of properties per tag, trying to write a summary of at least 2 tags would be this document extremely long. The purpose of this text is that I’m going to explain the syntax of CSS and I’m going to leave web references so you can visit them and practice in your spare time. In my opinion, CSS has two big areas. One is styling, that’s more about background colors, images, how big or small are the elements, how much margin, or padding those elements are going to have. The other one is about position, position is basically where the element is going to move and resides.

The best tool for CSS is the browser. In chrome if you right click and select Inspect Element the browser is going to open an HTML and the element you selected at the moment. If you look in that new window (it could be down, left, right or in another window) you are going to see the css applied to it. This is a good way to learn patterns and try to apply it to your web pages.

### The basic syntax of CSS stylesheet (style.css) is like this:

```css
p {
background-color: red;
color: black;
}

.boxStyle {
height: 30px;
width: 30px;
background-color: red;
}

#nameSpace {
font-size: 10px;
}
```

- The p here will add a red background color and black font color to ALL p tags in the html.
- The .boxStyle here will add a height and width of 30px to all elements with the a class="boxStyle"
- The #nameSpace here will add a font size of 10px to the element with the id="nameSpace"

As we can see these are the basic ways we can style our page we css.

My suggestion, use classes as much as possible, since that’s gonna give you the ability to reuse the css across your site.

---

## Relative Paths

Relative paths are the way we connect to different documents in our website. For example, if our style.css resides inside the assets directory we can access the file in our html by using the following relative path: assets/style.css

```jsx
<link rel="stylesheet" href="assets/style.css">
```

---

## Box Model:

In CSS, every element can be considered to fit within a series of boxes. Each box can be individually adjusted to provide spacing between elements or to fill in elements with colors.

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

![image](https://user-images.githubusercontent.com/29104770/123186568-045ab580-d45e-11eb-9e64-2ba20c20220d.png)

[CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

---

## CSS Floats:

The float CSS property places an element on the left or right side of its container, allowing text and inline elements to wrap around it. The element is removed from the normal flow of the page, though still remaining a part of the flow (in contrast to absolute positioning).

[float](https://developer.mozilla.org/en-US/docs/Web/CSS/float)

clearfix hack: 

This will clear the inline float of the elements. 

```css
.clearfix::after {
  content: "";
  clear: both;
  display: table;
}
```

*Note: read more [here](https://getbootstrap.com/docs/4.0/utilities/clearfix/)*

---

## Positioning:

The `position` property specifies the type of positioning method used for an element. The position CSS property sets how an element is positioned in a document. The top, right, bottom, and left properties determine the final location of positioned elements.

- `static` -
    - The element is positioned according to the normal flow of the document. The top, right, bottom, left, and z-index properties have no effect. This is the default value.
- `relative` -
    - The element is positioned according to the normal flow of the document, and then offset relative to itself based on the values of top, right, bottom, and left. The offset does not affect the position of any other elements; thus, the space given for the element in the page layout is the same as if position were static.
    - This value creates a new stacking context when the value of z-index is not auto. Its effect on table-*-group, table-row, table-column, table-cell, and table-caption elements is undefined.
- `fixed` -
    - The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to the initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block) established by the [viewport](https://developer.mozilla.org/en-US/docs/Glossary/viewport), except when one of its ancestors has a `transform`, `perspective`, or `filter` property set to something other than `none` (see the [CSS Transforms Spec](https://www.w3.org/TR/css-transforms-1/#propdef-transform)), in which case that ancestor behaves as the containing block. (Note that there are browser inconsistencies with `perspective` and `filter` contributing to containing block formation.) Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
    - This value always creates a new [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). In printed documents, the element is placed in the same position on *every page*.
- `absolute` -
    - The element is removed from the normal document flow, and no space is created for the element in the page layout. It is positioned relative to its closest positioned ancestor, if any; otherwise, it is placed relative to the initial [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block). Its final position is determined by the values of `top`, `right`, `bottom`, and `left`.
    - This value creates a new [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context) when the value of `z-index` is not `auto`. The margins of absolutely positioned boxes do not [collapse](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Mastering_margin_collapsing) with other margins.
- `sticky` -
    - The element is positioned according to the normal flow of the document, and then offset relative to its *nearest scrolling ancestor* and [containing block](https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_Block) (nearest block-level ancestor), including table-related elements, based on the values of `top`, `right`, `bottom`, and `left`. The offset does not affect the position of any other elements.
    - This value always creates a new [stacking context](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Positioning/Understanding_z_index/The_stacking_context). Note that a sticky element "sticks" to its nearest ancestor that has a "scrolling mechanism" (created when `overflow` is `hidden`, `scroll`, `auto`, or `overlay`), even if that ancestor isn't the nearest actually scrolling ancestor. This effectively inhibits any "sticky" behavior (see the [GitHub issue on W3C CSSWG](https://github.com/w3c/csswg-drafts/issues/865)).

[Read more about positioning](https://developer.mozilla.org/en-US/docs/Web/CSS/position)

---

## Chorme Inspector Tool:

To access this right click then select inspect. 

![image](https://user-images.githubusercontent.com/29104770/123186619-26543800-d45e-11eb-9051-73f467967fc4.png)

Or using the keyboard `ctrl+option+j`

![image](https://user-images.githubusercontent.com/29104770/123186642-32d89080-d45e-11eb-9c27-635c08f17862.png)

I've navigated to the console above. The console is KEY!!!

![image](https://user-images.githubusercontent.com/29104770/123186681-48e65100-d45e-11eb-9bfc-7b30a409258c.png)

---

## Flexbox (better alternative to floats):

Flexbox is the new way of handling the layout of the page. The best reference I can give you folks to flexbox are the following websites.

Read these docs: [A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

The gist: 

justify-content:

- **`flex-start`**: Items align to the left side of the container.
- **`flex-end`**: Items align to the right side of the container.
- **`center`**: Items align at the center of the container.
- **`space-between`**: Items display with equal spacing between them.
- **`space-around`**: Items display with equal spacing around them.

align-items:

- **`flex-start`**: Items align to the top of the container.
- **`flex-end`**: Items align to the bottom of the container.
- **`center`**: Items align at the vertical center of the container.
- **`baseline`**: Items display at the baseline of the container.
- **`stretch`**: Items are stretched to fit the container.

flex-direction:

- **`row`**: Items are placed the same as the text direction.
- **`row-reverse`**: Items are placed opposite to the text direction.
- **`column`**: Items are placed top to bottom.
- **`column-reverse`**: Items are placed bottom to top.

---

## Git Commands

1. `git init` - creates an empty repository in the current directory, only use this if and only if you are going to create a repository from scratch in your computer
2. `git clone "url"` - clones the repository from <url>
3. `git remote add <name> "url"` - this command is used when you want to add a new endpoint to push your code. It needs a <name> and a destination <url>. For example:
    1. `git remote add origin git@github.com:yourUserName/test`
    2. `git remote add upstream git@github.com:jcar787/test`

    Those two commands are going to add two endpoints origin and upstream to our remotes. Normally we push to origin and we pull from upstream.

4. `git remote -v` - shows the remotes or endpoints we added to our repository
5. `git add "file_name"` - this adds the file so git can keep track of it
6. `git commit -m “message”` - this commits the files you added or removed locally
7. `git push <remote> <branch>` - this is going to push your local commits to the repository defined in remote and into the branch. At this moment we use only master but we can create different branches. Using as a starting point the command from 3.a we can do this
    1. `git push origin main`

    origin is going to point to git@github.com:yourUserName/test

8. `git pull <remote> <branch>` - this is going to get the remote commits and merge them with your local changes. Using 3.b as a starting point, we can do this:
    1. `git pull upstream master`

    upstream is going to point to git@github.com:jcar787/test

These are the basic git commands. We are going to cover a little more about git later in the course and in your first project this is going to give you a lot of trouble until you can get the flow of it. It's totally normal. Remember always, pull first, work, add the files, commit with a descriptive message, push. If you follow these steps everything is going to be alright, at least 80% of the time. Merge conflicts are normal, just don’t panic and look for help as soon as you can.

**If you don’t want to drag and drop files and instead move them in the terminal:**

`cd` into the place where the file you want to move is

`cp -r Develop/* ~/ut-mws/homework-1/`

cp (copy) -r Develop/* (copies everything that is in the Develop file into a folder called ut-mws and into another folder called homework-1

---
## Github Pages

The steps to use Github Pages to host our website are the following from A-Z starting with a new repo if you already have a repo skip to step 5:

1. Create the repository in github 
2. Clone the repository to your local computer `git clone "your link"`
3. Through the terminal add as many files as you want, but this REQUIREs an index.html file at the root level. 
4. Push the changes to the repository.
5. Back in Github navigate to the repository and click on the settings tab at the top right corner once inside. 
6. Scroll down to the "github pages" section and select the master branch as the source in the first drop down. 
7. After the refresh scroll down again to the "github pages" section and you're going to have the live link of your website. This can be shared with friends family and used in an `<a>` tag in a portfolio. 

Important details:

1. The index.html file needs to reside at the root level of your repository. This is needed to github to find the pages.
2. You can add more directories like css, js, imgs to the repository and refer to the files inside those directories using relative paths in your index.html.
3. You can also add other html pages and use `<a href="">` to refer to those files inside your repository.

---