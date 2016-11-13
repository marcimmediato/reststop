

// https://developer.foursquare.com/overview/versioning
function fourSquareAdapter(authParams, searchTerm, stopLat, stopLong){
  var searchUrl = `https://api.foursquare.com/v2/venues/search?query=${searchTerm}&ll=${stopLat},${stopLong}`
  return $.ajax({
    url: searchUrl,
    method: "GET",
    data: authParams,
    //query: ''
    dataType: 'JSON',
    crossDomain: true,
  }).done(function( response ) {
    //return response.response;
  })
}


//yelpURL&query?thing=value
