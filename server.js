// require the express framework to be used
const express = require('express');
// create the app assigned to the invokation of express
const app = express();
// require cors as a depenency
const cors = require('cors');

// tells our app to automatically detect what environment it is running in, development by defalut
const environment = process.env.NODE_ENV || 'development';
// based on the environment we will fetch the database from knexfile 
const configuration = require('./knexfile')[environment];
// now that our database is configured it can be connected and used with knex
const database = require('knex')(configuration);

// set the port the app is running at based on the environment, port 3000 by default
app.set('port', process.env.PORT || 3000);
// tells the app to parse data with json by default, specifically for post requests
app.use(express.json());
// tells the app to use cors to allow access from other browsers
app.use(cors());

// starts the server and tells it to listen for changes
app.listen(app.get('port'), () => {
  // callback function returns the current port value in the console so we know where to access it
  console.log(`App is running on 'http://localhost:${app.get('port')}'`);
});

// route for the root directory of the app
app.get('/', (request, response) => {
  // a happy status code and a message to display in the browser window to indicate the application
  response.status(200).send('Welcome to Brews!');;
}); 

// get all breweries

app.get('/api/v1/breweries', (request, response) => {
  // go to the breweries table and select all rows
  database('breweries').select()
  // when response comes back send the parsed breweries data with happy status code
    .then((breweries) => {
      response.status(200).json(breweries)
    })
  // if there is a server error send the error message and status code 500
    .catch((error) => {
      response.status(500).json({ error })
    })
});

// get all beers

app.get('/api/v1/beers', (request, response) => {
  // go to the beers table and select all rows
  database('beers').select()
  // when response comes back send the parsed beers data with happy status code
    .then((beers) => {
      response.status(200).json(beers)
    })
  // if there is a server error send the error message and status code 500
    .catch((error) => {
      response.status(500).json({ error })
    })
});

// get a random beer

app.get('/api/v1/beers/random', (request, response) => {
  // go to the beers table and select all rows
  database('beers').select()
  // when the response comes back
    .then(data => {
    // assign count to the length of the data array
      const count = data.length
    // get a random number from the number or rows(count -1) to use as a random index number
      const randomIndex = Math.floor(Math.random() * Math.floor(count - 1));
    // assign the random beer to return to the random index of the repsonse data(beers array)
      const randomBeer = data[randomIndex]
    // send happy status code and the parsed random beer
      response.status(200).json(randomBeer);
    })
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error })
    })
})

// get all beers for a given brewery

app.get('/api/v1/beers/:brewery_id', (request, response) => {
  // get the selected brewery id from the request parameters
  let { brewery_id } = request.params;
  // conver the parsed id to an integer
  let breweryId = parseInt(brewery_id);
  // go to the beers table and get only the beers that have a brewery_id that matched the requested breweryID
  database('beers').where('brewery_id', breweryId).select()
    .then(data => {
      // if response contains data, 1 or more objects in the array
      if(data.length) {
        // send happy status code and the parsed array of beers(data)
        response.status(200).json(data);
      } else {
        // if the response doesn't contain any data(beers) send sad status code with detailed message
        response.status(404).json({ error: 'Could not find any beers for the selected brewery.' });
      }
    })
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error })
    })
});


// add a brewery

app.post('/api/v1/breweries', (request, response) => {
  // get the data sent throught the request body for the brewery to add
  const brewery = request.body;
  // declare the required parameters for this request
  for (let requiredParameter of ['name', 'year_est', 'num_locations']) {
    // if one or more of the required parameter are missing or incorrect data types
    if (!brewery[requiredParameter]) {
      return response
      // send sad status code
      .status(422)
      // send a custom error message indicating what is missing/incorrect
      .send( { error: `Expected format: { name: <String>, year_est: <Integer>, num_locations: <Integer>}. You're missing a "${requiredParameter}" property` })
    }
  }
  // if all required params are correct go to the breweries table and insert the provided brewery properties and assign the incremented id 
  database('breweries').insert(brewery, 'id')
    .then(brewery => {
      // send a happy status code with the id of the added brewery
      response.status(201).json({ id: brewery[0] })
    })
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error })
    });
});

// add a beer to a brewery

app.post('/api/v1/beers', (request, response) => {
  // get the data sent throught the request body for the beer to add
  const newBeer = request.body;
  // declare the required parameters for this request
  for (let requiredParameter of ['beer', 'style', 'abv', 'ibu', 'brewery_id']) {
    // if one or more of the required parameter are missing or incorrect data types
    if (!newBeer[requiredParameter]) {
      return response
      // send sad status code
      .status(422)
      // send a custom error message indicating what is missing/incorrect
      .send({ error: `Expected format: { beer: <String>, style: <String>, abv: <String>, ibu: <Integer>} brewery_id: <Integer>. You're missing a "${requiredParameter}" property` })
    }
  }
  // if all required params are correct go to the beers table and insert the provided beer properties and assign the incremented id 
  database('beers').insert(newBeer, 'id')
    .then(beer => {
      // send a happy status code with the id of the added beer
      response.status(201).json({ id: beer[0] })
    })
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error })
    });
});

// delete a brewery and all of its beers

app.delete('/api/v1/breweries/:id', (request, response) => {
  // get the requested brewery to delete
  const badBrew = request.params;
  // go to the breweries table 
  database('breweries')
    // find the brewery with the id that matches the requested brewery(badBrew)
    .where({ id: badBrew.id })
    // grab it for the response
    .select()
    .then(brew => {
      // if the response doesn't contain any data, empty array, means no match to the id requested
      if (!brew.length) {
        // send sad status code and custom error message
        return response.status(404).send({ error: 'Could not find the requested brewery, unable to delete.'})
      }
    })
  // if found go to the beers table
  database('beers')
    // find the beers with a brewery_id that matches the requested brewery(badBrew) to delete
    .where({ brewery_id: badBrew.id})
    // delete all beers that match from the database/table
    .del()
    .then(() => {
      // go to the breweries table
      database('breweries') 
        // get the brewery with the id that matches the requested brewery(badBrew) to delete
        .where({ id: badBrew.id })
        // delete that brewery from the database/table
        .del()
        // send happy status code and custom message
        .then(() => response.status(202).json({ message: 'Successfully deleted the brewery and its beers.'}))
      })
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error });
    })
});

// delete a beer

app.delete('/api/v1/beers/:id', (request, response) => {
  // get the requested beer to delete 
  const badBeer = request.params;
  // go to the beers table 
  database('beers')
    // find the beer with the id that matched the requested beer(badBeer)
    .where({ id: badBeer.id })
    // grab it for the response
    .select()
    // if the response doesn't contain any data, empty array, means no match to the id requested
    .then(beer => {
      if (!beer.length) {
        // send sad status code and custom error message
        return response.status(404).send({ error: 'Could not find the requested beer, unable to delete.'})
      }
    })
  // if found go to the beers table
  database('beers')
    // find the beer with a id that matches the requested beer(badBeer) to delete
    .where({ id: badBeer.id })
    // delete that beer from the database/table
    .del()
    // send happy status code and custom message
    .then(() => response.status(202).json({ message: 'Successfully deleted the beer.'}))
    // if there is a server error send the error message and status code 500
    .catch(error => {
      response.status(500).json({ error });
    })
});

