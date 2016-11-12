class Trip() {

  constructor(line, firstStop, lastStop) {
    let startId = firstStop.id - 1
    let endId = lastStop.id - 1
    let stops = []
    for(let i = startId;i<endId;i++){
      thisTrip.push(line[i])
    }

  }

}
