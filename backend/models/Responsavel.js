var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Responsavel = new Schema({
    professor: { type: Schema.Types.ObjectId, ref: 'Professor' },
    disciplina: { type: String }
});

module.exports = mongoose.model('Responsavel', Responsavel);