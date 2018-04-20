const PORT = 8080;

const express = require('express');
const app = express();
const server = require('http').Server(app);

app.get('/api/:letters', require('./getRealWords'));

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server is running on localhost:${PORT}`);
})

module.exports = server;