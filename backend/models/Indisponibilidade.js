import mongoose from 'mongoose';
import Professor from './Professor';

const Schema = mongoose.Schema;

let Indisponibilidade = new Schema({
	dataInicio: {
		type: Date
	},
	dataFim: {
		type: Date
	},
	professor: [
		{ type: Schema.Types.ObjectId, ref: 'Professor'}
	]
});

export default mongoose.model('Indisponibilidade', Indisponibilidade);