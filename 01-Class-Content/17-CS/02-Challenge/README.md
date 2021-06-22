# 17 Computer Science for JavaScript: Regex Tutorial

Developers write code, but they also write *about* code. Take a moment to search the web for tutorials about any of the subjects you’ve learned so far in this course. You’re likely to find thousands of tutorials written by developers of all skill levels, but especially by junior developers&mdash;like you!

Your Challenge this week is to create a tutorial that explains how a specific regular expression, or regex, functions by breaking down each part of the expression and describing what it does.

Before you start, clone the [starter code](https://github.com/coding-boot-camp/bug-free-goggles).

## User Story

```md
AS A web development student
I WANT a tutorial explaining a specific regex
SO THAT I can understand the search pattern the regex defines
```

## Acceptance Criteria

```md
GIVEN a regex tutorial
WHEN I open the tutorial
THEN I see a descriptive title and introductory paragraph explaining the purpose of the tutorial, a summary describing the regex featured in the tutorial, a table of contents linking to different sections that break down each component of the regex and explain what it does, and a section about the author with a link to the author’s GitHub profile
WHEN I click on the links in the table of contents
THEN I am taken to the corresponding sections of the tutorial
WHEN I read through each section of the tutorial
THEN I find a detailed explanation of what a specific component of the regex does
WHEN I reach the end of the tutorial
THEN I find a section about the author and a link to the author’s GitHub profile
```

## What is a Regex?

A **regex**, which is short for **regular expression**, is a sequence of characters that defines a specific search pattern. When included in code or search algorithms, regular expressions can be used to find certain patterns of characters within a string, or to find and replace a character or sequence of characters within a string. They are also frequently used to validate input. 

For example, the following regular expression can be used to verify that user input is a valid email address:

`/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

Each component of this regex has a unique responsibility to make sure that a user enters an email address that begins with an unspecified number of characters preceding the `@` symbol, followed by a domain.

Before you get started, watch this [introduction to regular expressions video](https://youtu.be/7DG3kCDx53c) and read this [Regex Tutorial](https://medium.com/factory-mind/regex-tutorial-a-simple-cheatsheet-by-examples-649dc1c3f285) to learn how to identify the different components that make up a regex. If you need any additional help, there are many resources on the web. Feel free to do your own research to find one that can help you complete this Challenge.

Once you have a better understanding of what these different parts of a regular expression do, you’ll need to explain what they do for a specific regex.

You can choose one of the following regular expressions or you can choose one that you found on your own (with the exception of the one that was covered in the virtual classes, Matching a Username):

* Matching a Hex Value &ndash; `/^#?([a-f0-9]{6}|[a-f0-9]{3})$/`

* Matching an Email &ndash; `/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/`

* Matching a URL &ndash; `/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/`

* Matching an HTML Tag &ndash; `/^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/`


## Getting Started

Instead of creating a repository, you’ll publish a GitHub **gist**. GitHub describes a gist as a simple way to share code snippets with others. It’s also an ideal way to demonstrate a technique, teach a principle, or show off a solution. It functions just like a repository, and you’ll use Markdown to create it, just as you do with your READMEs. Gists can include code, images, links, and anything else you can include in a README.

After you’ve cloned the starter code, learn [how to create a gist](https://help.github.com/en/github/writing-on-github/creating-gists). You can also watch this video on [how to use gists](https://www.youtube.com/watch?v=wc2NlcWjQHw).

> **Note:** Make sure to create a **public** gist.

The starter code is a template with a title, introductory paragraph, summary, and table of contents. The table of contents should link to sections of the tutorial that describe the functionality of each component in the regex. Be sure to rename the template to a unique name that describes your tutorial.

> **Note:** The regular expression that you choose may not include all of the components outlined in the starter code. After you’ve finished your walkthrough, you can remove any sections that you didn’t use.

Each section that describes a component should include more than just one sentence explaining what it does. It should also include a code snippet of that particular component and some examples that meet the requirements of that component.

> **Important:** Make revisions to your gist in the GitHub gist UI. This will create a revision history that graders can use to verify that the tutorial content is yours.


## Review

You are required to submit the following for review:

* The URL of the GitHub gist. Give the gist a unique name.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
