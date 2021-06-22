# 19 Progressive Web Applications (PWA): Budget Tracker

Giving users a fast and easy way to track their money is important, but allowing them to access that information at any time is even more important. Having offline functionality is paramount to the success of an application that handles users’ financial information.

Your challenge this week is to add functionality to an existing budget tracker application to allow for offline access and functionality. The user will be able to add expenses and deposits to their budget with or without a connection. When entering transactions offline, they should update the total when brought back online. Finally, you’ll deploy the application to Heroku.

Before you start, clone the [starter code](https://github.com/coding-boot-camp/symmetrical-bassoon).

> **On the Job:** When web developers are working on a feature request or trying to kill a bug, they rarely have all the information they need to solve the task in front of them. Being a successful developer requires you to combine knowledge that you’ve picked up from different applications you’ve worked on in the past to formulate a solution.
> 
> This Challenge will ask you to combine several tasks that you’ve learned over this module and the previous one to add offline functionality to an existing application. We’ve outlined how you can achieve this in the Getting Started section below.


## User Story

```md
AS AN avid traveller
I WANT to be able to track my withdrawals and deposits with or without a data/internet connection
SO THAT my account balance is accurate when I am traveling 
```

## Acceptance Criteria

```md
GIVEN a Budget Tracker without an internet connection
WHEN the user inputs an expense or deposit
THEN they will receive a notification that they have added an expense or deposit
WHEN the user reestablishes an internet connection
THEN the deposits or expenses added while they were offline are added to their transaction history and their totals are updated
```

## Mock-Up

The following image shows the web application's appearance and functionality:

![Challenge Demo](./Assets/19-pwa-homework-demo-01.png)


## Getting Started

Revisit the following lessons to complete this challenge:

### Offline Functionality

You’ll need to use IndexedDB to add offline functionality. Review Module 18: NoSQL, Lesson 4: Add Offline Persistence with IndexedDB as a refresher on how to add this to your application.

You’ll also need to add a service worker to your application. Review Module 19: Progressive Web Applications (PWA), Lesson 4: Using Service Workers as a refresher on how to add this to your application.

> **Rewind:** The Food Festival application that you created in this module's lessons did not include an Express.js server, so you used the `webpack-dev-server` npm module to test the service worker with an HTTPS-enabled server.
> 
> For this Challenge, however, you aren't using webpack, but you do have an Express.js server provided to you in the starter code. Remember that Chrome DevTools makes it possible to test service workers on localhost in development. Simply click on the Application tab in the tools, then select Service Workers from the left hand navigation.

> **Important:** You should add both of the files to handle this functionality to the `public/js/` directory of your application.

Once you’ve updated the existing budget tracker, it should provide the following functionality:

* The ability to enter deposits offline.

* The ability to enter expenses offline.

* Offline entries should be added to the tracker when the application is brought back online.

### Web Manifest

Because this will be a mobile-first application, you’ll also need to add a web manifest to your application with the app’s metadata to let users’ devices know what they’re installing and how the app should look on the home screen.

This `manifest.json` file for this project will contain the following properties:

* `name`

* `short_name`

* `icons`

* `theme_color`

* `background_color`

* `start_url`

* `display`

> **Important:** In the module project, you used webpack to create the `manifest.json` file. For this application, you’ll need to create it manually and add it to the `public/` directory of your application. You can also review **Module 19: Progressive Web Applications (PWA), Lesson 5: PWA** as a refresher on web manifests.

### Deployment to Heroku Using MongoDB Atlas

Finally, the budget tracker has a server and uses MongoDB as its database, so you’ll need to deploy this application to Heroku using MongoDB Atlas. To review this process, look at Module 18: NoSQL, Lesson 5: Add Mongoose Validation, specifically 18.5.5: Deploy to Heroku.


## Review

You are required to submit BOTH of the following for review:

* The URL of the functional, deployed application.

* The URL of the GitHub repository. Give the repository a unique name and include a README describing the project.

- - -
© 2021 Trilogy Education Services, LLC, a 2U, Inc. brand. Confidential and Proprietary. All Rights Reserved.
