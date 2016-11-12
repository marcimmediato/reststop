class Trip {

  constructor(line, firstStop, lastStop) {

    let startId = firstStop.id - 1
    let endId = lastStop.id - 1
    let thisTrip = []
    for(let i = startId;i<endId;i++){
      debugger
      thisTrip.push(line.stops[i])
    }
    return thisTrip
  }

}
