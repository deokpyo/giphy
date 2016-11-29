var topics = ["dancing", "drinking", "laughing", "slapping", "swimming", "eating"];

var queryURL = "http://api.giphy.com/v1/gifs/search?q=Gaming&api_key=dc6zaTOxFJmzC";

      $.ajax({ url: queryURL, method: 'GET' }).done(function(response) {
        console.log(response);
      });