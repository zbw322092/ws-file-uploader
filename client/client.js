let targetPort = 9999;
let address = `ws://localhost:${targetPort}`;

const ws = new WebSocket(address);

ws.onmessage = (event) => {
  console.log(`your get message: ${event.data}`);
};

