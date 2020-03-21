const express = require('express');
const app = express();

// USE environment variables '/.env'
const dotenv = require('dotenv').config();

app.get('/', function(req, res) {
  res.render('index', { title: 'My events' });
});

app.post('/party', function(req, res) {
  res.send('Post ok !');
});

app.listen(process.env.PORT, () =>
  console.log(`PWA <My Events> listening on port ${process.env.PORT}!`)
);
