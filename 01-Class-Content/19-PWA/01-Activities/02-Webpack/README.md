# Webpack

In this activity, you will create a `bundle.js` file with webpack.

## Instructions

* In the [Unsolved/](Unsolved/) folder, run `npm i -D webpack webpack-cli` in your command line to install webpack.

* Create a file called `webpack.config.js`.

  * Create the main configuration object `module.exports` with 3 properties: `entry`, `output`, and `mode`.
  
    * Set the entry point to be `src/app.js` (pay attention to the relative path).

    * Set the output folder as `/dist` and the bundled code to be in a file called `bundle.js`.

    * Set the mode to be `development` mode.

* In [index.html](Unsolved/index.html), change the JavaScript script tag to use `bundle.js`.

* In [package.json](Unsolved/package.json), add the necessary scripts to run webpack with the `--watch` option as well as without it. 

* To test it out, run webpack without the `--watch` option in your command line, i.e. `npm run build`. Open `index.html` in your browser and check the console to see what message was printed. You should see "Hello Webpack!"

* This time, run webpack with the `--watch` option, i.e. `npm run webpack`. 

* While webpack is running, in [app.js](Unsolved/src/app.js), replace "Hello Webpack!" with a message of your own and save the file.

* Check the browser's console to see the message updated!

* Remember to `CTRL + C` to terminate the `webpack --watch` process.