function myFunction() {
  fetch(
    // Make a fetch request to Wikipedia to get a random article title
    `// YOUR CODE HERE`
    //
  )
    .then(function(wikiResponse) {
      return wikiResponse.json();
    })
    .then(function(wikiResponse) {
      // Create a variable to hold the title of the Wikipedia article
      // YOUR CODE HERE
      //
      // Display the article title above the GIF as a <h2> heading
      // YOUR CODE HERE
      //
      var rating = document.getElementById('rating').value;
      // Return a fetch request to the Giphy search API with the article title and rating parameters
      // YOUR CODE HERE
      //
      // Remember to add your API key at the end
    })
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      if (response.data.length === 0) {
        console.log('Giphy could not find anything for that.');
      } else {
        console.log(response.data[0]);
        var responseContainerEl = document.querySelector('#response-container');
        responseContainerEl.innerHTML = '';
        var gifImg = document.createElement('img');
        gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
        responseContainerEl.appendChild(gifImg);
      }
    });
}
