// Make the ajax request
    // yelpUrl = 'https://api.yelp.com/v2/search?term=food&location=San+Francisco',
// When the ajax request is completed, find the img,
  // someData.artists.items[0].images[0].url

function restaurantsAdapter(searchTerm){
   return $.ajax({
  method: "GET",
  url: `https://api.spotify.com/v1/search?q=${searchTerm}&type=artist`
  // data: {q: artist_name, type: 'artist'}
  }).done(function( response ) {

    let firstArtist = response.artists.items[0]
    new Artist(firstArtist.name, firstArtist.popularity, firstArtist.images[0].url)
  })

}
$(function(){
  $('form').on('submit', function(event){
    event.preventDefault()
    let searchTerm = $('#artist_name').val()
    artistsAdapter(searchTerm).done(function(){
      store.artists.forEach(function(artist){
        $('.images').append(`<img src='${artist.imageUrl}' />`)
      })
    })

    // adapter



  })
})



  // And place the new image tag in the appropriate html.
//   $.ajax({
//   method: "POST",
//   url: "some.php",
//   data: { name: "John", location: "Boston" }
// })
//   .done(function( msg ) {
//     alert( "Data Saved: " + msg );
//   });
