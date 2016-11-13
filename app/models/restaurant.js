const Restaurant = (function() {

  return class Restaurant {

    constructor(name, address, checkins){
      this.name = name
      this.address = address
      this.checkins = checkins
      store.restaurants.push(this)
    }
  }
}())



