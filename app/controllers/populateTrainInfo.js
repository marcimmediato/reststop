function populateLines(){
  let html = "<option value='---'>---</option> <option value='l'>L</option>";
  $('#trainSelect').append(html)
}

function populateOriginStops(){

  var blank = "<option value='---'>---</option>";
  $('#originSelect').append(blank)

  var stops = LTrain.map( (stop) => {
    stationStop = new Stop(stop)
    let html = `<option value='${stationStop.id}'>${stationStop.name}</option>`
    $('#originSelect').append(html)
  })
}

function populateDestinationStops(value){

  var blank = "<option value='---'>---</option>";
  $('#destinationSelect').append(blank)

  var stops = line.map( (stop) => {
    if (stop.id.toString() !== value){
      let html = `<option value='${stop.id}'>${stop.name}</option>`
      $('#destinationSelect').append(html)
    }
  })
}
