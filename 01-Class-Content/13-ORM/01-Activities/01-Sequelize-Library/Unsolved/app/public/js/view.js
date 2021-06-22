// When user hits the author-search-btn
$('#author-search-btn').on('click', function() {
  // Save the author they typed into the author-search input
  var authorSearched = $('#author-search')
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's author in the url
  $.get('/api/authors/' + authorSearched, function(data) {
    // Log the data to the console
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
  });
});

// When user hits the genre-search-btn
$('#genre-search-btn').on('click', function() {
  // Save the book they typed into the genre-search input
  var genreSearched = $('#genre-search')
    .val()
    .trim();

  // Make an AJAX get request to our api, including the user's genre in the url
  $.get('/api/genres/' + genreSearched, function(data) {
    console.log(data);
    // Call our renderBooks function to add our books to the page
    renderBooks(data);
  });
});

function renderBooks(data) {
  if (data.length !== 0) {
    $('#stats').empty();
    $('#stats').show();

    for (var i = 0; i < data.length; i++) {
      var div = $('<div>');

      div.append('<h2>Book: ' + data[i].title + '</h2>');
      div.append('<p><strong>Author:</strong> ' + data[i].author + '</p>');
      div.append('<p><strong>Genre:</strong> ' + data[i].genre + '</p>');
      div.append('<p><strong>Pages:</strong> ' + data[i].pages + '</p><br>');
      $('#stats').append(div);
    }
  }
}
