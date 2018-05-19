var path = require('path');
const express = require('express');
const proxy = require('express-http-proxy');
const cors = require('cors');

const app = express();

app.use(cors());

app.use(
  '/api',
  proxy('https://api.livecoin.net')
);

app.use(express.static(__dirname + '/dist'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/index.html'));
});

app.listen(process.env.PORT || 3000, () => {
  console.log('Listening on prot 3000');
});
