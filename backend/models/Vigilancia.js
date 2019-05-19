var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Vigilancia = new Schema({
    professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
    exame: { type: Schema.Types.ObjectId, ref: 'Exame' },
    indisponibilidade: {type: String}
});

module.exports = mongoose.model('Vigilancia', Vigilancia);