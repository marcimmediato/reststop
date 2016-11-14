// https://developer.foursquare.com/overview/versioning
function fourSquareAdapter(searchTerm, stopLat, stopLong, stopNum){
  var searchUrl = `https://api.foursquare.com/v2/venues/search?query=${searchTerm}&radius=400&ll=${stopLat},${stopLong}`
  return $.ajax({
    url: searchUrl,
    method: "GET",
    data: authParams,
    dataType: 'JSON',
    crossDomain: true,
  }).done(function(returnObject) {
    let venues = returnObject.response.venues.slice(0,5)
    buildRestaurant(venues, stopNum)
  })
}
