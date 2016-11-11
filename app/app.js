// "routes"

$(function(){
  $('#origin').css('visibility','hidden')
  $('#destination').css('visibility','hidden')

  populateLines()

  // reveal origin selector
  $('#trainSelect').change( () => {
    event.preventDefault()
    $('#origin').css('visibility','visible')
    populateOriginStops()
  })

  // reveal destination selector
  $('#originSelect').change( () => {
    let value = $('#originSelect').val()
    $('#destination').css('visibility','visible')
    event.preventDefault()
    populateDestinationStops(value)
  })

})
