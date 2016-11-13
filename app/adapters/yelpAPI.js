// Make the ajax request
// yelpUrl = 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',

function restaurantsAdapter(searchTerm){
  return $.ajax({
    method: "GET",
    url: `${yelpURL}?term=${searchTerm}`
  }).done(function( response ) {

  })
}

$(function(){
  $('form').on('submit', function(event){
    event.preventDefault()
    let searchTerm = $('#foodChoice').val()
    restaurantsAdapter(searchTerm).done(function(){

      // something 


    })
  })

})
