const WebSocket = require('ws');

let targetPort = 9999;
let address = `ws://localhost:${targetPort}`;

const ws = new WebSocket(address, {
  protocolVersion: 13
});

