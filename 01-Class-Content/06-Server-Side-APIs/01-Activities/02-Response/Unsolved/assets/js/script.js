// Fetch request to Giphy API random endpoint
fetch(
  'https://api.giphy.com/v1/gifs/random?api_key=HvaacROi9w5oQCDYHSIk42eiDSIXH3FN'
)
  // Converts the response to JSON
  .then(function(response) {
    return response.json();
  })
  .then(function(response) {
    // Use 'querySelector' to get the ID of where the GIF will be displayed
    // YOUR CODE HERE
    //
    // Create an '<img>' element
    // YOUR CODE HERE
    //
    // Set that element's 'src' attribute to the 'image_url' from our Giphy API response
    // YOUR CODE HERE
    //
    // Append the '<img>' element to the page
    // YOUR CODE HERE
    //
  });
