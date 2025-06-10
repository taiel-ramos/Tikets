const express = require('express');
//const cors = require('cors');
const app = express();

//requiere('dotenv').config();

//app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("El servidor esta corriendo en el pueto "+ PORT);
});