import mongoose from 'mongoose';

const Schema = mongoose.Schema;

let Professor = new Schema({
    nome: {
        type: String
    },
    estatuto: {
        type: String
    }
});

export default mongoose.model('Professor', Professor);