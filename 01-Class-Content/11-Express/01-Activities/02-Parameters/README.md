# Express Parameters

In this activity, you will create a GET route that returns all of the characters, as well as a GET route that returns one specific character.

## Instructions

* Navigate to your [Unsolved](Unsolved/) folder and run `npm install`.

* Open the [server.js](Unsolved/server.js) file.

* Create a GET route `/api/characters` to return all characters. 

* Create _only_ one more GET route to return any given specific character. 

  * For example, a call to `api/characters/yoda` will return the data stored in the `yoda` object.

  * Iterate through the characters' `routeName` to check if it matches `req.params.character`

  * If there is no such character, send back a message "No character found". 

## Hint(s)

* What's the title of this activity? 

* You may need to consult the [Express guide to route parameters](https://expressjs.com/en/guide/routing.html#route-parameters)