const PORT = 8080;

const express = require('express');
const { cors, response } = require('./middlewares');
const app = express();
const server = require('http').Server(app);

app.use(cors);
app.use(response);

app.use('/api', require('./routes'));

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server is running on localhost:${PORT}`);
})

module.exports = server;