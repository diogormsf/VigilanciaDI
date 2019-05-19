var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let UnidadeCurricular = new Schema({
    nome: { type: String },
});

module.exports = mongoose.model('UnidadeCurricular', UnidadeCurricular);