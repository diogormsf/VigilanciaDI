var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let ExameSchema = new Schema({
    unidadecurricular: {
        type: Schema.Types.ObjectId, ref: 'UnidadeCurricular'
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
    sala: {
        type: [{ type: Schema.Types.ObjectId, ref: 'Sala' }]
    }
});

module.exports = mongoose.model('Exame', ExameSchema);