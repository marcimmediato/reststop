# User Flow


1. Navigates to home page
1. Selects train line ( currently just L until rest of train line data loaded or a useful API is configured )
1. Presented with origin stop list based on line selected 
1. Presented with destination stop list based on origin selected 
1. Enters and submits food search terms
1. On submit: Presented with n * 5 options for restaurants, where N is the number of stops between origin and destination.
  - Restaurants should be hyperlinked.

Our first pass will use just the ~~yelp~~ foursquare API.  

# Models and relationships

Rough sketch:

### Restaurant

- name
- address
- URL
- rating

- belongs to stop?

### Trip

- has many stops (stops between beginning and ending)  

### Line

(store)

- Name
- has many stops ?


### Stops

- name
- location (lat/long?) 
- Belongs to line

- has many restaurants

