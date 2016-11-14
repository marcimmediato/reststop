const Restaurant = (function() {

  return class Restaurant {

    constructor(name, address, checkins, stopId){
      this.name = name
      this.address = address
      this.checkins = checkins
      this.stopId = stopId
      store.restaurants.push(this)
    }
  }
}())
