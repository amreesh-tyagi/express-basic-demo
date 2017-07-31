const express = require('express');
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, Monotype!');
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name);
});

app.listen(5000, function () {
  console.log('Server is running  at http://localhost:5000');
});