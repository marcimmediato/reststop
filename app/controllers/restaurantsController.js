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
      $(`#stop-${restaurant.stopId} ul`).append(`<li><strong>${restaurant.name}</strong> - <a href='https://www.google.com/maps/@${restaurant.latitude},${restaurant.longitude}'>Map It</a> - ${restaurant.checkins} Check-Ins</li>`)
    }
  });

  store.restaurants.forEach((restaurant) => {
    if ($(`#stop-${restaurant.stopId} ul li`).length === 0) {
      $(`#stop-${restaurant.stopId} ul`).append('<p>No restaurants found.</p>');
    }
  });
}
