function search(searchTerm) {
  var result = ''
  store.restaurants = []
  currentTrip.stops.forEach((stop) => {
    let stopLat = stop.latLong[0];
    let stopLong = stop.latLong[1];
    let stopNum = stop.stopNum;
    result = fourSquareAdapter(searchTerm, stopLat, stopLong, stopNum);
  });
  return result
}
