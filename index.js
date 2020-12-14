const http = require("http");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

const server = http.Server(app);
app.use(express.static("Public/welcome_Page"));

server.listen(PORT, () =>
  console.log(`Server running on flamingo juice and port ${PORT}   🔥`)
);
