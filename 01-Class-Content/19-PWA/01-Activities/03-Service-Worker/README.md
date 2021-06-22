# Service Worker

In this activity, you will be registering a service worker for an 'Image Gallery' app. The script for registering a service worker is standard, which is why it is provided for you. However type out the code snippets instead of simply copying/pasting them to your application. It will help you solidify what you are doing!

## Instructions

* In [index.html](Unsolved/public/index.html), add the following script while paying attention to what each line of code is doing:

```html
<script type="text/javascript">
  (function() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker
        .register('./service-worker.js')
        .then(() => console.log('Service Worker registered successfully.'))
        .catch(error =>
          console.log('Service Worker registration failed:', error)
        );
    }
  })();
</script>
```

* In the [public](Unsolved/public/) folder, create a `service-worker.js` file and have it print out a message in the console, i.e. "Hi from your service-worker.js file!!"

* Run `npm install`, `npm run seed`, and `npm start` in your command line.

* Navigate to <http://localhost:3001> in Chrome and open the Dev Tools. In the `Application` tab, click on `Service Workers` on the left menu. Check to see if your service worker file was successfully found.

* If done correctly, you should see two messages logged in the browser console: one from the `service-worker.js` file and one from the script tag that you put in your `index.html` file.