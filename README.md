# Brews BYOB: Build Your Own Backend



### Endpoints

| Purpose | URL | Verb | Request Body | Sample Success Response |
|----|----|----|----|----|
| Get all breweries | `/api/v1/breweries` | GET | none | `{ breweries: [array of breweries]}` |
| Get all beers | `/api/v1/beers` | GET | none | `{ beers: [array of breweries]}` |
| Get a random | `/api/v1/beers/random` | GET | none | A single random beer: `{"id": 127, "beer": "Dunkel", "style": "German-Style Dark Lager", "abv": "5.6", "ibu": 24, "brewery_id": 50, "created_at": "2019-11-22T16:12:16.010Z", "updated_at": "2019-11-22T16:12:16.010Z"}` |
| Get all beers for a given brewery | `/api/v1/beers/:brewery_id` `:brewery_id` should be replaced with integer `id` of selected brewery | GET | none | `{[array of beers]}` |
| Add a brewery | `/api/v1/breweries` | POST | Requires: `name(string), year_est(integer), num_locations(integer)` | Status Code 201 & `{ id: added_brewery_id }` |
| Add a beer | `/api/v1/beers` | POST | Requires: `beer(string), style(string), abv(integer), ibu(integer), brewery_id(integer)` | 201 Status Code & `{ id: added_beer_id }` |
| Delete a beer | `/api/v1/beers/:id` `:id` should be replaced with integer `id` of selected beer | DELETE | none | 204 Status Code & `{ message: 'Successfully deleted the beer.'}` |
| Delete a brewery and all of its beers | `/api/v1/breweries/:id` `:id` should be replaced with integer `id` of selected brewery | DELETE | none | 204 Status Code & `{ message: 'Successfully deleted brewery and its beers.'}` |





