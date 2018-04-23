const PORT = process.env.PORT || 8080;

const express = require('express');
const { cors, response } = require('./middlewares');
const expressValidator = require('express-validator');

const app = express();
const server = require('http').Server(app);

app.use(cors);
app.use(response);
app.use(expressValidator())
app.use('/api', require('./routes'));

server.listen(PORT, () => {
  // eslint-disable-next-line
  console.log(`server is running on localhost:${PORT}`);
})

module.exports = server;