
class Line {

  constructor(name, stops) {
    this.name = name
    this.stops = stops

  }

  getStop(id){
    let foundStop =  this.stops.find((el) => {
      return el.id === id

    })

    return foundStop
  }


}
