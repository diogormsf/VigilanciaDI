var mongoose = require('mongoose');

const Schema = mongoose.Schema;

let Professor = new Schema({
    nome: {
        type: String
    },
    estatuto: {
        type: String
    },
    sabatica: {
        type: Boolean
    },
    gestor: {
        type: Boolean
    },
    responsavel: [{
        type: Schema.Types.ObjectId, ref: 'UnidadeCurricular'
    }]
});
module.exports = mongoose.model('Professor', Professor);
