function buildRestaurant(venues, stopId){
  return venues.map( (venue) => {
    let name = venue.name
    let address = venue.location.address
    let latitude = venue.location.lat
    let longitude = venue.location.lng
    let checkins = venue.stats.checkinsCount
    new Restaurant(name, address, latitude, longitude, checkins, stopId)
  })
}

function populateStops() {
  store.restaurants.forEach((restaurant) => {
    if (restaurant.address !== undefined) {
      $(`#stop-${restaurant.stopId} ul`).append(`<li><strong>${restaurant.name}</strong> - <a href='https://www.google.com/maps?q=${restaurant.latitude},${restaurant.longitude}' target='_blank'>Map It</a> - ${restaurant.checkins} Check-Ins</li>`)
    }
  });
  let beginStopId = currentTrip.stops[0].id;
  let endStopId = currentTrip.stops[currentTrip.stops.length-1].id;
  if (beginStopId > endStopId) {
    let temp = endStopId;
    endStopId = beginStopId;
    beginStopId = temp;
  }
  for (i=beginStopId; i<=endStopId; i++) {
    if ($(`#stop-${i} ul li`).length === 0) {
      $(`#stop-${i} ul`).append('<p>Sorry, no matching restaurants found near this stop.</p>');
    }
  }
}
