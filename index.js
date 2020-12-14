//const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
server.use(cors());

//const server = http.Server(app);
server.use(express.static("Public"));

server.listen(PORT, () =>
  console.log(`Server running on flamingo juice and port ${PORT}   🔥`)
);
