

// https://developer.foursquare.com/overview/versioning
function fourSquareAdapter(authParams, searchTerm){
  var searchUrl = `https://api.foursquare.com/v2/venues/search?query=${searchTerm}&ll=40.815581,-73.958372`
  return $.ajax({
    url: searchUrl,
    method: "GET",
    data: authParams,
    query: 
    dataType: 'JSON',
    crossDomain: true,
  }).done(function( response ) {
    console.log(response)
  })
}


yelpURL&query?thing=value
