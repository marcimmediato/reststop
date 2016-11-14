let line = []

const Stop = (function(){

  let id = 0

  return class Stop {
    constructor(object){
      this.name = object.name;
      this.latLong = object.latLong;
      this.id = ++id
      this.stopNum = line.length
      line.push(this)

    }
  }



}())
