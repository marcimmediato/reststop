// "routes"

var currentLine
var origin
var destination
var currentTrip

$(function(){



  // hide forms until explicitly revealed

  $('#origin').css('visibility','hidden')
  $('#destination').css('visibility','hidden')
  $('#chooser').css('visibility', 'hidden')
  $('#songRequest').css('visibility', 'hidden')

  populateLines()

  // reveal origin selector
  $('#trainSelect').change( () => {
    reset()

    event.preventDefault()
    $('#origin').css('visibility','visible')
    currentLine = populateOriginStops()

  })

  // reveal destination selector
  $('#originSelect').change( () => {

    $('#songRequest').css('visibility', 'hidden')
    $('#songContent').empty()

     let value = parseInt($('#originSelect').val())
     origin = currentLine.getStop(value)
    $('#destination').css('visibility','visible')
    event.preventDefault()
    populateDestinationStops(value, currentLine)

    if (currentTrip !== undefined){
      currentTrip = new Trip(currentLine, origin, destination)
      displayTrip(currentTrip)
    }
  })

  //reveal search box and make trip
  $('#destinationSelect').change( () => {

    $('#songRequest').css('visibility', 'hidden')
    $('#songContent').empty()

    let value = parseInt($('#destinationSelect').val())
    destination = currentLine.getStop(value)
    event.preventDefault()
    $('#chooser').css('visibility', 'visible')

    if (currentTrip !== undefined){
      currentTrip = new Trip(currentLine, origin, destination)
    }
  })



  //capture search data
  $('#chooserButton').click( () => {

    origin = currentLine.getStop(parseInt($('#originSelect').val()))
    destination = currentLine.getStop(parseInt($('#destinationSelect').val()))

    currentTrip = new Trip(currentLine, origin, destination)


    displayTrip(currentTrip)

    let searchTerm = $('#foodChoice').val()
    findFood(searchTerm);
    setTimeout(function(){ populateStops() }, 1000)

    $('#songContent').empty()
    $('#songRequest').css('visibility', 'visible')

  })


  // option for song

  $('#songButton').click( () => {
    let searchTerm = $('#foodChoice').val()
    spotifyAdapter(searchTerm);
  })

})
