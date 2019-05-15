var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ExameSchema = new Schema({
    codigo: {
        type: Number
    },
    disciplina: {
        type: String
    },
    semestre: {
        type: Number 
    },
    epoca: {
        type: Number
    },
    data: {
        type: Date
    },
    dia: {
        type: String
    },
    inicio: {
        type: Date
    },
    fim: {
        type: Date
    },
    sala: {
        type: [String]
    }
});

module.exports = mongoose.model('Exame', ExameSchema);