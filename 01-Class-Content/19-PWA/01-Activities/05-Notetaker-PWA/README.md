# Notetaker PWA

In this activity, you will implement offline functionality to a Notetaker app. You can refer to the previous activities for the code to register, install, and activate the service worker.

## Instructions

* In the [public/](Unsolved/public/) folder, create a `manifest.json` file with the following properties:

  * `name` and `short_name` set to "Notetaker"

  * `icons` set to an array of icons of multiple sizes. You can find all the icons in the [icons](Unsolved/public/assets/images/icons) folder. Be sure to include the `src`, `sizes`, and `type` of each icon.
  
  * `theme_color` and `background_color` set to `#ffffff`
  
  * `start_url` set to `/`
  
  * `display` set to `standalone`

* In the [index.html](Unsolved/public/index.html) file, register the service worker.

  * Refer to the previous activities to get the code for registering a service worker!

* In the [public/](Unsolved/public/) folder, create a `service-worker.js` file and do the following:

  * Name the caches `my-site-cache-v2` and `data-cache-v2` respectively.

  * Add all of the files in the [public/](Unsolved/public) folder to the `FILES_TO_CACHE` array. Don't forget to also include `/`

  * Install and activate the service worker

  * Intercept fetch requests. If the response is successful, we clone it and store it in our cache. If the network request fails, we grab it from our cache.

* If done correctly, create a few notes and you should be able to see all of your notes saved in cache even after going offline.

## Hint(s)

* Refer to the previous activities to help you create the `service-worker.js` file!
