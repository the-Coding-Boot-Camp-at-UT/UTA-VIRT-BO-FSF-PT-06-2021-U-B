**What we covered/Objectives:** 

- To review some git commands. Yes we know it's very confusing right now. You WILL get the hang of it. I did not understand when I first learned either.
- CSS Intro
- Flexbox fun! (Extra, but I SUGGEST it)


## CSS Stuff!

CSS has a lot of properties per tag, trying to write a summary of at least 2 tags would be this document extremely long. The purpose of this text is that I’m going to explain the syntax of CSS and I’m going to leave web references so you can visit them and practice in your spare time.In my opinion, CSS has two big areas. One is styling, that’s more about background colors, images, how big or small are the elements, how much margin, or padding those elements are going to have. The other one is about position, position is basically where the element is going to move and resides.

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

### Relative Paths

Relative paths are the way we connect to different documents in our website. For example, if our style.css resides inside the assets directory we can access the file in our html by using the following relative path: assets/style.css

```jsx
<link rel="stylesheet" href="assets/style.css">
```

---

### Box Model:

In CSS, every element can be considered to fit within a series of boxes. Each box can be individually adjusted to provide spacing between elements or to fill in elements with colors.

- **Content** - The content of the box, where text and images appear
- **Padding** - Clears an area around the content. The padding is transparent
- **Border** - A border that goes around the padding and content
- **Margin** - Clears an area outside the border. The margin is transparent

![image](https://user-images.githubusercontent.com/29104770/123186568-045ab580-d45e-11eb-9e64-2ba20c20220d.png)

[CSS Box Model](https://www.w3schools.com/css/css_boxmodel.asp)

---

### CSS Floats:

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

### Positioning:

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

### Chorme Inspector Tool:

To access this right click then select inspect. 

![image](https://user-images.githubusercontent.com/29104770/123186619-26543800-d45e-11eb-9051-73f467967fc4.png)

Or using the keyboard `ctrl+option+j`

![image](https://user-images.githubusercontent.com/29104770/123186642-32d89080-d45e-11eb-9c27-635c08f17862.png)

I've navigated to the console above. The console is KEY!!!

![image](https://user-images.githubusercontent.com/29104770/123186681-48e65100-d45e-11eb-9bfc-7b30a409258c.png)

---

### Flexbox (better alternative to floats):

Flexbox is the new way of handling the layout of the page. The best reference I can give you folks to flexbox are the following websites.

Read these docs: 

[A Complete Guide to Flexbox | CSS-Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)

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

### Git Commands

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