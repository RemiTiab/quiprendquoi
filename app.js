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

app.set('view engine', 'pug');

app.get('/', function(req, res) {
  res.render('index', {
    title: 'My Events',
    currentDate: mydate('date')
  });
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
    .catch(err => res.redirect(`/error`));
});

app.post('/party/:id/items', function(req, res) {
  axios
    .post(`${process.env.API_URL}/party/${req.params.id}/items`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.redirect(`/party/${data._id}`));
});

app.delete('/party/:id/items/:idElem', function(req, res) {
  axios
    .delete(
      `${process.env.API_URL}/party/${req.params.id}/items/${req.params.idElem} `
    )
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.redirect(`/party/${data._id}`));
});

app.delete('/party/:id', function(req, res) {
  axios
    .delete(`${process.env.API_URL}/party/${req.params.id}`)
    .then(() =>
      res.render('index', {
        messageParty: 'Evénement supprimé'
      })
    )
    .catch(err => res.redirect(`/party/${data._id}`));
});

app.patch('/party/:id', function(req, res) {
  axios
    .patch(`${process.env.API_URL}/party/${req.params.id}`, req.body)
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.redirect(`/party/${data._id}`));
});

app.patch('/party/:id/items/:idElem', function(req, res) {
  axios
    .patch(
      `${process.env.API_URL}/party/${req.params.id}/items/${req.params.idElem}`,
      req.body
    )
    .then(() => res.redirect(`/party/${req.params.id}`))
    .catch(err => res.redirect(`/party/${data._id}`));
});

app.get('/party/:id', function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render('party', {
        party: data,
        title: data.name,
        idParty: req.params.id,
        url: `${process.env.FRONT_URL}:${process.env.PORT}/party/items/${data._id}`
      })
    )
    .catch(err => console.log(err));
});

app.get('/party/:id/update', function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render('updateEvent', {
        party: data,
        title: data.name,
        idParty: req.params.id
      })
    )
    .catch(err => console.log(err));
});

app.get('/party/:id/items/:idElem/update', function(req, res) {
  axios
    .get(`${process.env.API_URL}/party/${req.params.id}`)
    .then(({ data }) =>
      res.render('updateElem', {
        party: data,
        title: data.name,
        idParty: req.params.id,
        idElement: req.params.idElem
      })
    )
    .catch(err => console.log(err));
});

app.listen(process.env.PORT, () =>
  console.log(`PWA <My Events> listening on port ${process.env.PORT}!`)
);
