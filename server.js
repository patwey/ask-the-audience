const http = require('http');
const express = require('express');

const app = express();

app.use(express.static('public'));

app.get('/', function (req, resp) {
  res.sendFile(__dirname + '/public/index.html');
});

var port = process.env.PORT || 3000;

var server = http.createServer(app);
server.listen(port, function () {
  console.log('Listening on port ' + port + '.');
});

module.exports = server;
