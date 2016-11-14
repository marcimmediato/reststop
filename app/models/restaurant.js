const Restaurant = (function() {

  return class Restaurant {

    constructor(name, address, latitude, longitude, checkins, stopNum){
      this.name = name;
      this.address = address;
      this.latitude = latitude;
      this.longitude = longitude;
      this.checkins = checkins;
      this.stopNum = stopNum;
      store.restaurants.push(this);
    }
  }
}())
