//const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const server = express();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
server.use(cors());

//const server = http.Server(app);

server.listen(PORT, () =>
  console.log(`Server running on flamingo juice and port ${PORT}   🔥`)
);

server.use(express.static("Public/welcome_Page"));
server.use(express.static("Public/connections"));
server.use(express.static("Public/links"));
server.use(express.static("Public/mapIt"));
server.use(express.static("Public/Parkit_photos"));
