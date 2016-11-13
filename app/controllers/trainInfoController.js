function populateLines(){
  let html = "<option value='---'>---</option> <option value='l'>L</option>";
  $('#trainSelect').append(html)
}

function populateOriginStops(){

  var blank = "<option value='---'>---</option>";
  $('#originSelect').append(blank)
  let stopList = []
  var stops = LTrain.map( (stop) => {
    let stationStop = new Stop(stop)
    let html = `<option value='${stationStop.id}'>${stationStop.name}</option>`
    $('#originSelect').append(html)
    stopList.push(stationStop)
  })
  let lLine = new Line('L', stopList)
  return lLine
}

function populateDestinationStops(value, currentLine){

  var blank = "<option value='---'>---</option>";
  $('#destinationSelect').append(blank)

  var stops = currentLine.stops.map( (stop) => {
    if (stop.id !== value){
      let html = `<option value='${stop.id}'>${stop.name}</option>`
      $('#destinationSelect').append(html)
    }
  })
}
