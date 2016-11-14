const Restaurant = (function() {

  return class Restaurant {

    constructor(name, address, latitude, longitude, checkins, stopId){
      this.name = name;
      this.address = address;
      this.latitude = latitude;
      this.longitude = longitude;
      this.checkins = checkins;
      this.stopId = stopId;
      store.restaurants.push(this);
    }
  }
}())
