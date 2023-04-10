//!MPORTACIONES
require("dotenv").config();
const express = require("express");
const router = require("./routes");
const cors = require("cors"); //trae el index automaticamente

//? 2-Se inicializa un nuevo servidor

const server = express();

server.use(express.json());
server.use(cors());
server.use(router);
//? 3-Se levanta el servidor en un puerto
const PORT = process.env.PORT || 3001;
server.listen(PORT, () => {
  console.log(`Server raised in port ${PORT}`);
});
