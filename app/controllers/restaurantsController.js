function buildRestaurant(venues, stopId){
  return venues.map( (venue) => {
    let name = venue.name
    let address = venue.location.address
    let checkins = venue.stats.checkinsCount
    new Restaurant(name, address, checkins, stopId)
  })
}

function populateStops() {
  store.restaurants.forEach((restaurant) => {
    $(`#stop-${restaurant.stopId} ul`).append(`<li><strong>${restaurant.name}</strong> - ${restaurant.address} - ${restaurant.checkins} Check-Ins</li>`)
  })
}
