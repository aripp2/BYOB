const breweriesData = require('../../../breweriesData');
const beersData = require('../../../beersData');

const createBrewery = (knex, brewery) => {
  return knex('breweries').insert({
    brewery_id: brewery.id,
    name: brewery.name,
    year_est: brewery.yearEst,
    num_locations: brewery.numLocations
  }, 'id')
};

const createBeer = (knex, beer) => {
  return knex('beers').insert({
    brewery_id: beer.brewery_id,
    beer: beer.beer,
    style: beer.style,
    abv: beer.abv,
    ibu: beer.ibu
  }, 'id')
};

exports.seed = function(knex) {
  return knex('beers').del()
    .then(() => knex('breweries').del())
    .then(() => {
      let beerPromises = [];
      let breweryPromises = [];

      beersData.forEach(beer => {
        beerPromises.push(createBeer(knex, beer));
      })
      breweriesData.forEach(brewery => {
        breweryPromises.push(createBrewery(knex, brewery))
      })
      // console.log('breweries', breweryPromises)
      return Promise.all([breweryPromises, beerPromises])
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
