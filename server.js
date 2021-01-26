const path = require("path");
const http = require("http");
const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = http.createServer(app);
const io = socketio(server);

app.use(express.static(path.join(__dirname, "public")));

let COUNT = 0;

io.on("connection", (socket) => {
  console.log("connected");
  io.emit("update", COUNT);
  socket.on("click", () => {
    COUNT += 1;
    io.emit("update", COUNT);
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => console.log(`Listening on port ${port}`));
