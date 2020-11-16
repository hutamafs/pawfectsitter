#!/usr/bin/env node

let app = require("../app");
let http = require("http");
const config = require('../config');


let port = config.port;
app.set("port", port);

let server = http.createServer(app);

server.listen(port);

server.on("error", (err) => {
  console.error(err);
});

server.on("listening", () => {
  console.log(`Server is listening on port ${port}`)
});

