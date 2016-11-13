// "routes"

$(function(){

  var currentLine
  var origin
  var destination

  $('#origin').css('visibility','hidden')
  $('#destination').css('visibility','hidden')
  $('#chooser').css('visibility', 'hidden')

  populateLines()

  // reveal origin selector
  $('#trainSelect').change( () => {
    event.preventDefault()
    $('#origin').css('visibility','visible')
    currentLine = populateOriginStops()

  })

  // reveal destination selector
  $('#originSelect').change( () => {
     let value = parseInt($('#originSelect').val())
     origin = currentLine.getStop(value)
    $('#destination').css('visibility','visible')
    event.preventDefault()
    populateDestinationStops(value, currentLine)
  })

  //reveal search box and make trip
  $('#destinationSelect').change( () => {

    let value = parseInt($('#destinationSelect').val())
    destination = currentLine.getStop(value)
    event.preventDefault()
    $('#chooser').css('visibility', 'visible')

    let trip = new Trip(currentLine, origin, destination)
    trip.stops.map((stop) =>{
      $('#trip').append(`<h3>${stop.name}</h3><br>`)
    })
  })



  //capture search data
  $('#chooserButton').click( () => {
    let searchTerm = $('#foodChoice').val()
    executeSearch(searchTerm);
  })

})
