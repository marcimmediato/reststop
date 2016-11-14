class Line {
  // var store = []
  constructor(name, stops) {
    this.name = name
    this.stops = stops
    // store.push(this)
  }

  getStop(stopNum){
    let foundStop =  this.stops.find((el) => {
      return el.stopNum === stopNum

    })

    return foundStop
  }
  // static getLine(lineName){
  //   return store.find(el () =>{
  //     return el.name === lineName
  //   })
  // }
}

const linesObject = {
  "1": Train1,
  "2": Train2,
  "3": Train3,
  "4": Train4,
  "5": Train5,
  "6": Train6,
  "7": Train7,
  "A": TrainA,
  "B": TrainB,
  "D": TrainD,
  "F": TrainF,
  "G": TrainG,
  "H": TrainH,
  "J": TrainJ,
  "L": TrainL,
  "M": TrainM,
  "Q": TrainQ,
  "R": TrainR
}
