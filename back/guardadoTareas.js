const express = require('express');
const db = require('../database/db.js');

const router = express.Router();

router.put('/crear-tarea', (req, res) => {
    const {nombre, fecha, dificultad, tipo, informacion , urgente} = req.body;
    if (!nombre || !fecha || !dificultad  || !tipo || !informacion || !urgente) {
        return res.status(400).json({error: 'faltan campos obligatorios'});
    }
    db.query{
        'INSERT INTO tareas (Nombre, FechaCarga, id_Dificultad, id_TipoTrabajo, informacion, urgente)    '
    }
})