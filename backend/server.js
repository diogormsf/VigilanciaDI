import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import Professor from './models/Professor';
import Exame from './models/Exame';
import Vigilancia from './models/Vigilancia';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://admin:admin@cluster0-xa1jq.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use('/', router);

app.listen(4000, () => console.log(`Express server running on port 4000`));