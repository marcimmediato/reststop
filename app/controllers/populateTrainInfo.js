function populateOriginStops(){

  var stops = LTrain.map( (stop) => {
    return stop.name;
  })
}

function populateDestinationStops(){

  var stops = LTrain.map( (stop) => {
    return stop.name
  })
}

function populateLines(){
  var html = "<option value='---'>---</option> <option value='l'>L</option>"
  $('#trainSelect').append(html)
}
