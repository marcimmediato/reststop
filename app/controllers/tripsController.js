function getTrip(line, start, stop){
  trip = new Trip(line, start, stop)
  return trip
}

function displayTrip(trip){
  let tripHTML = ""
  trip.stops.map((stop) =>{
  tripHTML += `<div id=stop-${stop.id}><h3>Stop: ${stop.name}</h3><ul></ul></div><br>`
  })
  $('#trip').html(tripHTML)
}
