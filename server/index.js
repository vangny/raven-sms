const { createServer } = require('http');
const axios = require('axios');
const db = require('../db/index');
const app = require('./main');

const PORT = process.env.PORT || 3030;
const server = createServer(app);

server.listen(PORT, (err) => { 
  if (err) {throw err;}
  console.log(`listening to port ${PORT}`)
});
