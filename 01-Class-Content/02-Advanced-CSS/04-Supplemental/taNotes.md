## Chrome Inspector

This is going to be one of the many many friends you make, maybe even your bestie during this program. You can view elements on a web page and also open the console log. 

1. To access this tool open up google chrome and right click and select "inspect" 

![image](https://user-images.githubusercontent.com/29104770/124957259-814d6980-dfde-11eb-96bb-40fb3209c7cc.png)

![image](https://user-images.githubusercontent.com/29104770/124957296-8d392b80-dfde-11eb-9c3a-0912083835dd.png)


This is going to open a new window at the bottom or side of you current page where you can change content, margins, color or any other css property. Is really useful to use it for styling the page quickly and then add the changes to your css file. 

---

## CSS Reset

CSS Reset helps us to reset the default style that browsers apply to html elements so our page looks the same in all browsers. The 2 most used resets are reset.css and normalize.css. Search for the reset.css or normalize.css and add it to your website, through a cdn. You need to add that style first before your custom css so the reset doesn't overwrite your css.

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

## Pseudo Classes:

This is a way to target very specific elements in your stylesheet to add additional styling. Looks like the follow: (I encourage you to play CSS Diner): 

![image](https://user-images.githubusercontent.com/29104770/124957627-e608c400-dfde-11eb-90f8-4966de5a1bc9.png)

Here is a list of all the various types of pseudo-classes: (can also be found at the link under it)

![image](https://user-images.githubusercontent.com/29104770/124957680-f3be4980-dfde-11eb-9f76-f694a8931d91.png)

[Pseudo-classes](https://developer.mozilla.org/en-US/docs/Web/CSS/Pseudo-classes)

---
## Bootstrap:

Twitter Bootstrap is a front-end framework that devs use to quickly create elements that have built in style and responsiveness. It is designed to be copy and pasted into your website. Bootstrap is also based off a grid system that is 12 columns wide. (We'll get more into that later). Please go to the Bootstrap website to get their CDN and Layouts>Components. It's what you use it for. I would not suggest downloading this. 

[Introduction](https://getbootstrap.com/docs/5.0/getting-started/introduction/)


We'll review the grid system that bootstrap supports. Below we can see how rows work in Bootstrap and how we need to add the "row" class in the html to get the desired outcome like below. You can also use the column or "col" to get the desired look below. Columns are also responsive. **col-lg** is for a viewing on a pc, **col-md** is for viewing on something like an ipad, and **col-sm** is used for small devices like cell phones. 

*Key: You should have 1 container for every bootstrap website you're working on.* 

**Rows:**

![image](https://user-images.githubusercontent.com/29104770/124958339-ad1d1f00-dfdf-11eb-8352-042e5d5869a1.png)

**Columns:** 

![image](https://user-images.githubusercontent.com/29104770/124958393-ba3a0e00-dfdf-11eb-98ae-bda8e157747e.png)

### Media Queries:

So if we're using our own custom CSS we'll need to create media queries as it won't have built in responsiveness like bootstrap. This should go at the very bottom of your CSS and you should have different sections for different sizings. Ie. at X size I want the following styling to be applied. 

![image](https://user-images.githubusercontent.com/29104770/124958446-c7ef9380-dfdf-11eb-910c-bf899599e046.png)

Here's a good video to explain this more: 

[Lesson 2.3 - Media Queries](https://www.youtube.com/watch?v=x_wlcp-W27c)

Here is another example of using Media Queries in your code: 

```css
@media screen and (max-width: 768px) {
  body {
    background-color: #333;
  }

  .wrapper {
    /* Box-model */
    width: 100%;
    padding: 20px;
  }

  #main-content,
  #sidebar {
    width: 100%;
  }

  #sidebar {
    margin-top: 40px;
  }
}

/* Additional Screen Sizes */

/* Width at 320px and below */
@media screen and (max-width: 320px) {
  body {
    background-color: #333;
  }

  .wrapper {
    /* Box-model */
    width: 100%;
    padding: 20px;
  }

  #main-content,
  #sidebar {
    width: 100%;
  }

  #sidebar {
    margin-top: 40px;
  }
}

/* Width at 168px and below */
@media screen and (max-width: 168px) {
  body {
    background-color: #333;
  }

  .wrapper {
    /* Box-model */
    width: 100%;
    padding: 20px;
  }

  #main-content,
  #sidebar {
    width: 100%;
  }

  #sidebar {
    margin-top: 40px;
  }
}
```

You will notice certain screens at certain sizes. When the screen is at a specified size it will apply the css inside the media query. 

***Advice:** Responsiveness is important! Every employer is going to check if your app is responsive. As we move towards a more cellular life-style expect your users to be using mobile to view your website. UXUI is important! If they can't understand how to use it, it's garbage.* 

### Viewport Meta Tag:

This is a meta data tag that you should have in all of your HTMLs. It helps with responsive design. You can read more about it [here](https://www.w3schools.com/css/css_rwd_viewport.asp) at W3Schools. 

```jsx
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```