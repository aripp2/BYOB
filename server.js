const express = require('express');
const app = express();
const cors = require('cors');

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
// console.log('configuration', configuration)
const database = require('knex')(configuration);
// console.log('database', database)

app.set('port', process.env.PORT || 3000);
app.use(express.json());
app.use(cors());

app.locals.title = 'Brews';

app.listen(app.get('port'), () => {
  console.log(`App is running on 'http://localhost:${app.get('port')}'`);
});

app.get('/', (request, response) => {
  response.status(200).send('Welcome to Brews!');;
}); 

app.get('/api/v1/breweries', (request, response) => {
  database('breweries').select()
    .then((breweries) => {
      response.status(200).json(breweries)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

app.get('/api/v1/beers', (request, response) => {
  database('beers').select()
    .then((beers) => {
      response.status(200).json(beers)
    })
    .catch((error) => {
      response.status(500).json({ error })
    })
})

// get all beers for a given brewery

app.get('/api/v1/beers/:brewery_id', (request, response) => {
  let { brewery_id } = request.params;
  let breweryId = parseInt(brewery_id)
  database('beers').where('brewery_id', breweryId).select()
    .then(data => {
      if(data.length) {
        response.status(200).json(data);
      } else {
        response.status(404).json({ error: 'Couldn\'t find any beers for the selected brewery.'});
      }
    })
    .catch(error => {
      response.status(500).json({ error })
    })
})

// get a random beer

// app.get('/api/v1/beers/')


// add a brewery

app.post('/api/v1/breweries', (request, response) => {
  const brewery = request.body;

  for (let requiredParameter of ['name', 'year_est', 'num_locations']) {
    if (!brewery[requiredParameter]) {
      return response
      .status(422)
      .send( { error: `Expected format: { name: <String>, year_est: <Integer>, num_locations: <Integer>}. You're missing a "${requiredParameter}" property`})
    }
  }

  database('breweries').insert(brewery, 'id')
    .then(brewery => {
      response.status(201).json({ id: brewery[0]})
    })
    .catch(error => {
      response.status(500).json({ error })
    });
})

// add a beer to a brewery

// delete a brewery and all of its beers

