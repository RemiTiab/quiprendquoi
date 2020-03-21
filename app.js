const express = require('express');
const app = express();

// USE environment variables '/.env'
const dotenv = require('dotenv').config();
// GET current Date for choosing a available date for evenement
var mydate = require('current-date');
// GET Post parameters
const bodyParser = require('body-parser');
// API Requests
const axios = require('axios');

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res) {
  res.render('index', { title: 'My events' });
});

app.get('/error', function(req, res) {
  res.render('error', {
    title: "Page d'erreur"
  });
});

app.post('/party', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party`, req.body)
    .then(({ data }) => res.redirect(`/party/${data._id}`))
    .catch(err => res.send(err));
});

app.get('/party', function(req, res) {
  res.render('party', {
  party: data,
  title: data.name,
  url: `${process.env.FRONT_URL}:${process.env.PORT}/party/${data._id}`
}),
});

app.listen(process.env.PORT, () =>
  console.log(`PWA <My Events> listening on port ${process.env.PORT}!`)
);
