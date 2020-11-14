#!/usr/bin/env node

let app = require("../app");
let http = require("http");
const config = require('../config');


let port = config.port;
app.set("port", port);

let server = http.createServer(app);
const io = require("socket.io")(server);

server.listen(port);

server.on("error", (err) => {
  console.error(err);
});

io.on("connection", socket => {
  console.log("udah konek nih ^^ <<<<<<<SOCKET");
  // socket.on("chat message", msg => {
  //   console.log(msg);
  //   io.emit("chat message", msg);
  // });
});




server.on("listening", () => {
  console.log(`Server is listening on port ${port}`)
});

