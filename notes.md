# User Flow


A user: 

1. Navigates to home page
1. Selects train line ( just L for MVP )
1. Presented with origin stop list based on line selected 
1. Presented with destination stop list based on origin selected 
1. Enters and submits food search terms
1. Presented with n * 5 options for restaurants, where N is the number of stops between origin and destination.

# Models and relationships


TBD

### Restaurant

- name
- address

- belongs to stop

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
