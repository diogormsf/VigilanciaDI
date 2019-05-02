import mongoose from 'mongoose';
import Professor from './Professor';
import Exame from './Exame';

const Schema = mongoose.Schema;

let Vigilancia = new Schema({
    professor: {
        type: Professor
    },
    exame: {
        type: Exame
    }
});

export default mongoose.model('Vigilancia', Vigilancia);