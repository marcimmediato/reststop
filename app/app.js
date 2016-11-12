// "routes"

$(function(){
  $('#origin').css('visibility','hidden')
  $('#destination').css('visibility','hidden')
  $('#chooser').css('visibility', 'hidden')

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
    alert(value)
    $('#destination').css('visibility','visible')
    event.preventDefault()
    populateDestinationStops(value)
  })

  //reveal search box
  $('#destinationSelect').change( () => {
    event.preventDefault()
    $('#chooser').css('visibility', 'visible')
  })

  //capture search data
  $('#chooserButton').click( () => {
    let searchTerm = $('#foodChoice').val()
    alert(searchTerm)
  })

})
