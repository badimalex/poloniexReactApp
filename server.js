const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(
  '/api',
  proxy('https://api.livecoin.net')
);

app.listen(3000, () => {
  console.log('Listening on prot 3000');
});
