import { Server } from "socket.io";

const io = new Server(1337, { /* options */ });

io.use((socket) => {
  // if () socket.handshake.roomId
})

io.on("connection", (socket) => {

  console.log(socket.id); // ojIckSD2jqNzOqIrAGzL
});
