const mysql = require('mysql2');
require('dotenv').config();

const connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

connection.connect((err) =>{
    if (err) {
        console.log("Error al conecetar la base de datos :(");
        throw err;
    }
    console.log("Conexion on la base de datos echa :)");
});

module.exports = connection;