const app = require("express")();
const http = require("http").createServer(app);

const options = { cors: { origin: "*" } };
const io = require("socket.io")(http, options);

io.on("connection", (socket) => {
  console.log("a user connected");
});

http.listen(4449, () => {
  console.log("listening on *:4449");
});
