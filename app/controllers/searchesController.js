function executeSearch(searchTerm){
  console.log(searchTerm)
  fourSquareAdapter(authParams,searchTerm).done( (response) => {
    console.log(response)

  }
    // restaurantSet = response.splice(0,5)
    // restaurantSet.map( (restaurant) => {
    //   // new Restaurant 
    // })
  )
}



// - get search term
// - get lat long of each intermediate stop
// - run query
// - take top 5 restaurants for each
// - build new restaurants from model
// - store them? 
