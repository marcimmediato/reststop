// "routes"

$(function(){

  () => {
    event.preventDefault()
    populateLines()
  }

  // reveal train line selector
  $("document").on("load", () => {
    event.preventDefault()
    populateLines()
  })

  // reveal origin selector
  $('#trainSelect').on('submit', () => {
    event.preventDefault()
    populateOriginStops()
  })

  // reveal destination selector
  $('#originSelect').on('submit', () => {
    event.preventDefault()
    populateOriginStops()
  })


})
