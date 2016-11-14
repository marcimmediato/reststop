const Trip = (function(){

  return class Trip {
    constructor(line, firstStop, lastStop) {
      let startId = firstStop.id
      let endId = lastStop.id
      let thisTrip = []
      if (startId < endId) {
        for(let i = startId-1;i<endId;i++){
          thisTrip.push(line.stops[i])
        }
      } else {
        for(let i = startId-1;i>=endId-1;i--){
          thisTrip.push(line.stops[i])
        }
      }
      this.stops = thisTrip
    }
  }
}())
