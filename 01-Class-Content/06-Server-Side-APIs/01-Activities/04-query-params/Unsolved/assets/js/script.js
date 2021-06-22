function myFunction() {
  var searchTerm = document.getElementById('searchTerm').value;
  // Create a variable to hold the value of rating
  // YOUR CODE HERE
  //
  fetch(
    'https://api.giphy.com/v1/gifs/search?q=' +
      searchTerm +
      // Add the rating parameter
      // YOUR CODE HERE
      //
      // Remember to add your API key
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response.data[0]);
      var responseContainerEl = document.querySelector('#response-container');
      responseContainerEl.innerHTML = '';
      var gifImg = document.createElement('img');
      gifImg.setAttribute('src', response.data[0].images.fixed_height.url);
      responseContainerEl.appendChild(gifImg);
    });
}
