// Make the ajax request
// yelpUrl = 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',

function restaurantsAdapter(searchTerm, stopLat, stopLong, stopId){
   return $.ajax({
  method: "GET",
  url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
  // data: {q: artist_name, type: 'artist'}

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
