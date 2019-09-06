var http = require('http');
var express = require('express');
var WSS = require('ws').Server;

var app = express().use(express.static('public'));
var server = http.createServer(app);
server.listen(8080, '0.0.0.0');

var wss = new WSS({ port: 8081 });
wss.on('connection', function(socket) {
  console.log('Opened Connection 🎉');

  socket.on('message', function(message) {
    console.log('Received: ' + message);

    wss.clients.forEach(function each(client) {
      client.send(message);
      console.log('Sent: ' + message);
    });
  });

  socket.on('close', function() {
    console.log('Closed Connection 😱');
  });

});
