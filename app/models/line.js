class Line {

  var store = []

  constructor(name, stops) {
    this.name = name
    this.stops = stops
    store.push(this)
  }

  getStop(id){
    let foundStop =  this.stops.find((el) => {
      return el.id === id

    })

    return foundStop
  }

  static getLine(lineName){
    return store.find(el () =>{
      return el.name === lineName
    })
  }
}
