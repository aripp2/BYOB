const breweriesData = require('../../../breweriesData');

const createBrewery = (knex, brewery) => {
  return knex('breweries').insert({
    name: brewery.name,
    year_est: brewery.yearEst,
    num_locations: brewery.numLocations
  }, 'id')
  .then(breweryId => {
    let beerPromises = [];
    brewery.beers.forEach(beer => {

      beerPromises.push(
        createBeer(knex, {
          beer: beer.beer,
          style: beer.style,
          abv: beer.abv,
          ibu: beer.ibu,
          brewery_id: breweryId[0]
        })
      )
    });
    return Promise.all(beerPromises);
  })
};

const createBeer = (knex, beer) => {
  return knex('beers').insert(beer);
};

exports.seed = function(knex) {
  return knex('beers').del()
    .then(() => knex('breweries').del())
    .then(() => {
      let breweryPromises = [];

      breweriesData.forEach(brewery => {
        breweryPromises.push(createBrewery(knex, brewery))
      })
      return Promise.all(breweryPromises);
    })
    .catch(error => console.log(`Error seeding data: ${error}`))
};
