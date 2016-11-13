function buildRestaurant(venues){
  return venues.map( (venue) => {
    let name = venue.name
    let address = venue.location.address 
    let checkins = venue.stats.checkinsCount

    new Restaurant(name, address, checkins)

  })
}
