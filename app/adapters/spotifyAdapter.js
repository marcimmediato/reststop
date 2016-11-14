function spotifyAdapter(searchTerm){
  var songUrl = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
  return $.ajax({
    url: songUrl,
    method: "GET",
    dataType: 'JSON',
    crossDomain: true,
  }).done(function(returnObject) {
    let name = returnObject.tracks.items[0].name
    let link = returnObject.tracks.items[0].external_urls.spotify
    let artist = returnObject.tracks.items[0].album.artists[0].name
    addSong(name, link, artist)
  })
}

function addSong(name, link, artist){
  html=`<b>Listen a tasty song by ${artist}:</b><br><em><a href='${link}' target='_blank'>${name}</a></em>`
  $('#songContent').append(html)
}
