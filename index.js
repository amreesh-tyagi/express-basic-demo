const express = require('express');
var os = require("os");
const app = express();

app.get('/', function(req, res) {
  res.send('Hello, Monotype! at '+os.hostname());
});

app.get('/hello/:name', function(req, res) {
  res.send('Hello, ' + req.params.name);
});

app.listen(5000, function () {
  console.log('Server is running  at http://localhost:5000');
});