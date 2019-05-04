import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Exame = new Schema({
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

export default mongoose.model('Exame', Exame);