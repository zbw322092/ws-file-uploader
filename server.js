const http = require('http');
const express = require('express');
const app = express();
const WebSocket = require('ws');

const server = http.Server(app);

let port = 9999;
let clientID = 0;

app.use(express.static('./client'));

const wsServer = new WebSocket.Server({
  server: server
});

wsServer.on('connection', (socket, request) => {
  ++clientID;
  console.log(`client ${clientID} has connected`);

  socket.send(`Yes, I notice you, client ${clientID}`);

});



server.listen(port, () => {
  console.log(`server is listening on port ${port}`);
});

