const { WebSocketServer } = require('ws');
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();
const wss = new WebSocketServer({ port: 8080 });

let clients = [];

wss.on('connection', (socket) => {
  console.log('New WebSocket connection');
  clients.push(socket);

  // Clean up when a client disconnects
  socket.on('close', () => {
    clients = clients.filter((client) => client !== socket);
    console.log('WebSocket connection closed');
  });
});

// Broadcast updates to all connected clients
function broadcast(message) {
  clients.forEach((client) => {
    if (client.readyState === WebSocket.OPEN) {
      client.send(JSON.stringify(message));
    }
  });
}

// Database listeners
async function notifyClients() {
  const posts = await prisma.post.findMany();
  broadcast({ type: 'update', data: posts });
}

// Watch for database changes
setInterval(notifyClients, 2000); // Poll every 2 seconds
