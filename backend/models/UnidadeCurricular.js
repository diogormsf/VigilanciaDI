var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UnidadeCurricular = new Schema({
    nome: { type: String },
    codigo: {type: Number}
});

module.exports = mongoose.model('UnidadeCurricular', UnidadeCurricular);