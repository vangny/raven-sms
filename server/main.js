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


app.get('/api/guests', (req, res) => {
  res.send(guests);
});

app.get('/api/companies', (req, res) => {
  res.send(companies);
});

app.get('/api/messages', (req, res) => {
  const newMessages = JSON.parse(messages).map((template) => {
    template.message = template.message.replace(/TIME/g, req.query.timedGreet);
    template.message = template.message.replace(/NAME/g, req.query.guestName);
    template.message = template.message.replace(/ROOMNUM/g, req.query.roomNum);
    template.message = template.message.replace(/COMPANY/g, req.query.companyName);
    return template;
  })

  res.send(JSON.stringify(newMessages));
});

module.exports = app;