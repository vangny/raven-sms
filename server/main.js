const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const guests = fs.readFileSync('./data-samples/Guests.json', 'utf8');
const companies = fs.readFileSync('./data-samples/Companies.json', 'utf8');
const messages = fs.readFileSync('./messageTemplates.json', 'utf8');

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(
  cors({
    allowedHeaders: [
      'Content-Type',
      'application/json'
    ],
  })
);

app.use(express.static(`${__dirname}/../client/dist`));
app.use(express.static(`${__dirname}, "jsx"`));

module.exports = app;