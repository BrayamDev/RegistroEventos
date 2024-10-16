const express = require('express');
const enrutador = express.Router();
const resp = require('../src/util/resp');


let personasRegistradas = []; 

enrutador.post('/registerEvento', (req, res) => {
    const persona = req.body; 
    personasRegistradas.push(persona);
    resp.success(req, res, 200, 'Registro exitoso', personasRegistradas);
});

module.exports = enrutador;
