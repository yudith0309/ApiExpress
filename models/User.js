var mongoose = require('mongoose'); //Modelo para llamar los campos de la BD

var schema = new mongoose.Schema({
    nombre: {
        type: String,           
    },
    apellido: {
        type: String,
        default: ''
    },
    carne: {
        type: String,
        default: ''
    }    
});

var client = new mongoose.model('clientes', schema);

module.exports = client;