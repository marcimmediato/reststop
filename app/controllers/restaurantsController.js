function buildRestaurant(venues, stopNum){
  return venues.map( (venue) => {
    let name = venue.name
    let address = venue.location.address
    let latitude = venue.location.lat
    let longitude = venue.location.lng
    let checkins = venue.stats.checkinsCount
    new Restaurant(name, address, latitude, longitude, checkins, stopNum)
  })
}

function populateStops() {
  store.restaurants.forEach((restaurant) => {
    if (restaurant.address !== undefined) {
      $(`#stop-${restaurant.stopNum} ul`).append(`<li><strong>${restaurant.name}</strong> - <a href='https://www.google.com/maps?q=${restaurant.latitude},${restaurant.longitude}' target='_blank'>Map It</a> - ${restaurant.checkins} Check-Ins</li>`)
    }
  });
  let beginStopNum = currentTrip.stops[0].stopNum;
  let endStopNum = currentTrip.stops[currentTrip.stops.length-1].stopNum;
  if (beginStopNum > endStopNum) {
    let temp = endStopNum;
    endStopNum = beginStopNum;
    beginStopNum = temp;
  }
  for (i=beginStopNum; i<=endStopNum; i++) {
    if ($(`#stop-${i} ul li`).length === 0) {
      $(`#stop-${i} ul`).append('<p>Sorry, no matching restaurants found near this stop.</p>');
    }
  }
}
