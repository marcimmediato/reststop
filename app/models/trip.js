const Trip = (function(){

  return class Trip {
    constructor(line, firstStop, lastStop) {
      
      let startNum = firstStop.stopNum
      let endNum = lastStop.stopNum
      let thisTrip = []
      if (startNum < endNum) {
        for(let i = startNum;i<=endNum;i++){
          thisTrip.push(line.stops[i])
        }
      } else {
        for(let i = startNum;i>=endNum;i--){
          thisTrip.push(line.stops[i])
        }
      }
      this.stops = thisTrip
    }
  }
}())
