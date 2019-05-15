import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";

import Professor from "./models/Professor";
import Exame from "./models/Exame";
import Vigilancia from './models/Vigilancia';

const app = express();
const router = express.Router();

app.use(cors());
app.use(bodyParser.json());

//Mongoose connection alternative (localhost)
//para usar, tem que ter o mongodb compass, criar uma DB local, criar uma DB vigilanciadi
mongoose.connect("mongodb://localhost:27017/vigilanciadi", {
  useNewUrlParser: true
});
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB database connection established succecssfully!");
});

//------------------- ROUTES -------------------------------
//------------------- Exame --------------------------------
//retorna todos os exames
router.route("/exames").get((req, res) => {
  Exame.find((err, exames) => {
    if (err) console.log(err);
    else res.json(exames);
  });
});

//retorn um exame pelo seu ID
router.route("/exames/:id").get((req, res) => {
  Exame.findById(req.params.id, (err, exame) => {
    if (err) console.log(err);
    else res.json(exame);
  });
});

//adiciona um exame
router.route("/exames/add").post((req, res) => {
  let exame = new Exame(req.body);
  exame
    .save()
    .then(exame => {
      res.status(200).json({ exame: "Added successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create new record");
    });
});

//apaga um exame pelo seu ID
router.route("/exames/delete/:id").get((req, res) => {
  Exame.findByIdAndRemove({ _id: req.params.id }, (err, exames) => {
    if (err) res.json(err);
    else res.json("Remove successfully");
  });
});
//-----------------------------------------------------------
//-----------------------------------------------------------
//-------------------Indisponibilidade-----------------------
//retorna Indisponibilade de um professor
router.route("/indisponibilidade/professor/:id").get((req, res) => {
  Indisponibilidade.findByProfessor(req.params.id, (err, indisponibilidade) => {
    if(err) console.log(err);
    else res.json(indisponibilidade);
  });
});

//adiciona indisponibilidade de um professor
router.route("/indisponibilidade/add").post((req,res) => {
  let indisponibilidade = new Indisponibilidade(req.body);
  indisponibilidade
    .save()
    .then(indisponibilidade => {
      res.status(200).json({ indisponibilidade: "Added successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create new record");
    });
});


//-----------------------------------------------------------
//------------------- Professor -----------------------------
//retorna todos os professores
router.route("/professores").get((req, res) => {
  Professor.find({}, (err, professores) => {
    if (err) console.log(err);
    else res.json(professores);
  });
});

//retorn um exame pelo seu ID
router.route("/professores/:id").get((req, res) => {
  Professor.findById(req.params.id, (err, professor) => {
    if (err) console.log(err);
    else res.json(professor);
  });
});

//adiciona um exame
router.route("/professores/add").post((req, res) => {
  let professor = new Professor(req.body);
  professor
    .save()
    .then(professor => {
      res.status(200).json({ professor: "Added successfully" });
    })
    .catch(err => {
      res.status(400).send("Failed to create new record");
    });
});

//apaga um exame pelo seu ID
router.route("/professores/delete/:id").get((req, res) => {
  Professor.findByIdAndRemove({ _id: req.params.id }, (err, professores) => {
    if (err) res.json(err);
    else res.json("Remove successfully");
  });
});
//-----------------------------------------------------------


/* -------------------------------------------------------------
//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = 'mongodb+srv://admin:admin@cluster0-xa1jq.mongodb.net/test?retryWrites=true';
mongoose.connect(mongoDB, { useNewUrlParser: true });
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
------------------------------------------------------------- */

app.use("/", router);

app.listen(4000, () => console.log(`Express server running on port 4000`));
