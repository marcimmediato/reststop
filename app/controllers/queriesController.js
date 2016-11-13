function findFood(searchTerm) {
  currentTrip.stops.forEach((stop) => {
    let stopLat = stop.latLong[0];
    let stopLong = stop.latLong[1];
    let stopId = stop.id;
    fourSquareAdapter(searchTerm, stopLat, stopLong);
  })
}
