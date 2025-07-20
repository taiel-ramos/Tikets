const express = require("express");
const cors = require("cors");
const guardado  = require("./guardadoTareas");
const app = express();

require('dotenv').config();
require('../database/db.js');

app.use(cors());
app.use(express.json());
app.use(express.static('public'));
app.use('/api', guardado);



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor escuchando en http://localhost:${PORT}`);
});