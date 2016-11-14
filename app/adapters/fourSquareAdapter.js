// https://developer.foursquare.com/overview/versioning
function fourSquareAdapter(searchTerm, stopLat, stopLong, stopId){
  var searchUrl = `https://api.foursquare.com/v2/venues/search?query=${searchTerm}&radius=150&ll=${stopLat},${stopLong}`
  //var searchUrl = `https://api.foursquare.com/v2/venues/search?query=taco&radius=200&ll=40.815581,-73.958372&client_id=YF3KZ032VSRXAKFAJIYUIM2ZQVJ2BQ400TR1MZ1JXKSFDGX0&client_secret=HZ5RJOOSVMAXDM4GAS5TTAA2IILOIAZX2RFR5F0VBSFDQR5V&v=20180101&m=foursquare`
  return $.ajax({
    url: searchUrl,
    method: "GET",
    data: authParams,
    dataType: 'JSON',
    crossDomain: true,
  }).done(function(returnObject) {
    let venues = returnObject.response.venues.slice(0,5)
    buildRestaurant(venues, stopId)
  })
}


// // testing
// var testResponse = $.ajax({
//   url: "https://api.foursquare.com/v2/venues/search?query=taco&radius=200&ll=40.815581,-73.958372&client_id=YF3KZ032VSRXAKFAJIYUIM2ZQVJ2BQ400TR1MZ1JXKSFDGX0&client_secret=HZ5RJOOSVMAXDM4GAS5TTAA2IILOIAZX2RFR5F0VBSFDQR5V&v=20180101&m=foursquare",
//   method: "GET",
//   dataType: 'JSON',
//   crossDomain: true,
// }).done((response) =>  {
//   name =
// })
