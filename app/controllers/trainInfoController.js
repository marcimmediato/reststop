// iterate over Trains array in seeds and add the line name to the drop-down
function populateLines(){
  let blankChoice = "<option value='---'>---</option>"
  $('#trainSelect').append(blankChoice)
  Trains.forEach((train) => {
    $('#trainSelect').append(`<option>${train[0].line}</option>"`)
  })
}

function populateOriginStops(){

  let lineChoice = $('#trainSelect').val();
  let blank = "<option value='---'>---</option>"; 
  $('#originSelect').append(blank)
  var line = linesObject[lineChoice]
  let stopList = []
  var stops = line.map( (stop) => {
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
