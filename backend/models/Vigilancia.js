import mongoose from 'mongoose';
import Professor from './Professor';
import Exame from './Exame';

const Schema = mongoose.Schema;

let Vigilancia = new Schema({
    professor: [
        { type: Schema.Types.ObjectId, ref: 'Professor' }
    ],
    exame: [
        { type: Schema.Types.ObjectId, ref: 'Exame' }
    ]
});

export default mongoose.model('Vigilancia', Vigilancia);