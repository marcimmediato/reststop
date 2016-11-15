function spotifyAdapter(searchTerm){
  var songUrl = `https://api.spotify.com/v1/search?q=${searchTerm}&type=track`
  return $.ajax({
    url: songUrl,
    method: "GET",
    dataType: 'JSON',
    crossDomain: true,
  }).done(function(returnObject) {

    let rand = Math.floor(Math.random() * 20);
    let name = returnObject.tracks.items[rand].name
    let link = returnObject.tracks.items[rand].external_urls.spotify
    let uri = returnObject.tracks.items[rand].uri
    let artist = returnObject.tracks.items[rand].album.artists[0].name
    addSong(name, link, uri, artist)
  })
}

function addSong(name, link, uri, artist){
  html = `<b>Listen a tasty song by ${artist}:</b><br><em><a href='${link}' target='_blank'>${name}</a></em>`
  player = `<iframe src="https://embed.spotify.com/?uri=${uri}" frameborder="0" allowtransparency="true"></iframe>`
  $('#songContent').empty().append(html)
  $('#songPlayer').empty().append(player)
}


