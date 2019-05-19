var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Sala = new Schema({
    localizacao: { type: String },
    lotacaoNormal: {type: Number},
    lotacaoExame: {type: Number}
});

module.exports = mongoose.model('Sala', Sala);