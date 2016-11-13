class Trip {

  constructor(line, firstStop, lastStop) {

    let startId = firstStop.id
    let endId = lastStop.id - 1
    let thisTrip = []
    for(let i = startId;i<endId;i++){

      thisTrip.push(line.stops[i])
    }
    this.stops = thisTrip
  }

}
