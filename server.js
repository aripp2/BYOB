const express = require('express');
const app = express();

const environment = process.env.NODE_ENV || 'development';
const configuration = require('./knexfile')[environment];
// console.log('configuration', configuration)
const database = require('knex')(configuration);
// console.log('database', database)

app.set('port', process.env.PORT || 3000);
app.use(express.json());

app.listen(app.get('port'), () => {
  console.log(`App is running on ${app.get('port')}`);
});



