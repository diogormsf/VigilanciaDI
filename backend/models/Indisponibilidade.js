var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Indisponibilidade = new Schema({
    professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
    inicio: { type: Date },
    fim: {type: Date},
    justificacao: {type: String}
});

module.exports = mongoose.model('Indisponibilidade', Indisponibilidade);