const express = require("express");
const http = require("http");
const socketIo = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

const rooms = {};

io.on("connection", (socket) => {
  socket.on("join-room", (roomId) => {
    if (rooms[roomId]) {
      rooms[roomId].push(socket.id);
    } else {
      rooms[roomId] = [socket.id];
    }

    const otherUsers = rooms[roomId].filter((id) => id !== socket.id);
    socket.emit("all-users", otherUsers);

    socket.broadcast.to(roomId).emit("user-joined", socket.id);
    socket.join(roomId);
  });

  socket.on("send-signal", ({ userToSignal, callerId, signal }) => {
    io.to(userToSignal).emit("receive-signal", { signal, callerId });
  });

  socket.on("return-signal", ({ signal, callerId }) => {
    io.to(callerId).emit("returning-signal", { signal, id: socket.id });
  });

  socket.on("disconnect", () => {
    for (const roomId in rooms) {
      rooms[roomId] = rooms[roomId].filter((id) => id !== socket.id);
      socket.to(roomId).broadcast.emit("user-left", socket.id);
    }
  });
});

server.listen(3001, () => console.log("Server rodando na porta 3001"));
