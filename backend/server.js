const express = require('express')
const app = express()
const port = 4000

var Exame = require('./models/Exame');
var Professor = require('./models/Professor');
var Vigilancia = require('./models/Vigilancia');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://admin:admin@cluster0-7elnd.azure.mongodb.net/local_library?retryWrites=true";
mongoose.connect(mongoDB, {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var ObjectId = require('mongoose').Types.ObjectId;


app.get('/getAllExames', function (req, res, next) {

  Exame.find({}, function (err, cursor) {
    res.json(cursor);
    cursor.forEach(function (doc) {
      console.log(doc);
    });
  })
});

app.get('/getExameById', function (req, res, next) {

  Exame.findById(req.query.id)
    .populate('exame')
    .exec(function (err, exameinstance) {
      if (err) {
        return next(err);
      }
      if (exameinstance == null) {
        var err = new Error('Exame not found');
        err.status = 404;
        return next(err);
      }
      res.json(exameinstance);
    })
});

app.get('/getAllProfessores', function (req, res, next) {

  Professor.find({}, function (err, cursor) {
    res.json(cursor);
    cursor.forEach(function (doc) {
      console.log(doc);
    });
  })
});

app.get('/getProfessorById', function (req, res, next) {

  Professor.findById(req.query.id)
    .populate('professor')
    .exec(function (err, professorinstance) {
      if (err) {
        return next(err);
      }
      if (professorinstance == null) {
        var err = new Error('Professor not found');
        err.status = 404;
        return next(err);
      }
      res.json(professorinstance);
    })
});

app.get('/getAllVigilancias', function (req, res, next) {

  Vigilancia.find()
    .populate('professor').populate('exame')
    .exec(function (err, list_vigilancias) {
      if (err) {
        return next(err);
      }
      res.json(list_vigilancias);
    });
});

app.get('/getVigilanciasByProfessor', function (req, res, next) {

  Vigilancia.find({
      professor: req.query.idprofessor
    })
    .populate('professor').populate('exame')
    .exec(function (err, list_vigilancias) {
      if (err) {
        return next(err);
      }
      res.json(list_vigilancias);
    });
});

app.get('/addVigilancia', function (req, res, next) {

  Exame.findById(req.query.exameid)
    .populate('exame')
    .exec(function (err, exameinstance) {
      if (err) {
        return next(err);
      }
      if (exameinstance == null) {
        var err = new Error('Exame not found');
        err.status = 404;
        return next(err);
      }
      Professor.findById(req.query.professorid)
        .populate('professor')
        .exec(function (err, professorinstance) {
          if (err) {
            return next(err);
          }
          if (professorinstance == null) {
            var err = new Error('Professor not found');
            err.status = 404;
            return next(err);
          }

          let vigilanciadetail = {
            professor: professorinstance,
            exame: exameinstance
          }

          var vigilancia = new Vigilancia(vigilanciadetail);
          vigilancia.save(function (err) {
            if (err) {
              return next(err);
            }
            res.json(vigilancia);
          });
        })
    })


});

/**
 * Receives epoca -> sends calendar
 */
app.get('/createCalendar', function (req, res, next) {

  let availableProf = [];
  let calendar = [];
  Professor.find({}, function (err, allprofessores) {
    allprofessores.forEach(function (elem) {
      if (elem.sabatica === false && elem.gestor === false) {
        availableProf.push(elem);
      }
    })
    Exame.find({
      epoca: req.query.epoca
    }, function (err, allexames) {
      if (allexames.length > availableProf.length) {
        var err = new Error('Mais exames que professores disponiveis');
        err.status = 400;
        return next(err);
      }
      var i;
      for (i = 0; i < availableProf.length; i++) {

        let vigilanciadetail = {
          professor: availableProf[i],
          exame: exameinstance[i % allexames.length]
        }
        var vigilancia = new Vigilancia(vigilanciadetail);
        vigilancia.save(function (err) {
          if (err) {
            return next(err);
          }
          calendar.push(vigilancia);
        });
      }
      res.json(calendar);
    })
  })
});

app.get('/getVigilanciasResponsavel', function (req, res, next) {

  let result = [];

  Professor.findById(req.query.professorid)
    .populate('professor')
    .exec(function (err, professorinstance) {
      if (err) {
        return next(err);
      }
      if (professorinstance == null) {
        var err = new Error('Professor not found');
        err.status = 404;
        return next(err);
      }

      Exame.find({}, function (err, allExames) {});

      professorinstance.responsavel.populate('unidadecurricular').forEach(function (elem) {

        allExames.forEach(function (ex) {
          if (ex.unidadecurricular === elem) {

            Vigilancia.find({
                exame: ex
              })
              .populate('professor').populate('exame')
              .exec(function (err, list_vigilancias) {
                if (err) {
                  return next(err);
                }
                result.push(list_vigilancias);
              });
          }
        })

      })
      res.json(result);
    })
});

app.get('/getExamesResponsavel', function (req, res, next) {

  let result = [];
  Professor.findById(req.query.professorid)
    .populate('professor')
    .exec(function (err, professorinstance) {
      if (err) {
        return next(err);
      }
      if (professorinstance == null) {
        var err = new Error('Professor not found');
        err.status = 404;
        return next(err);
      }
      Exame.find({}, function (err, allExames) {

        professorinstance.responsavel.populate('unidadecurricular').forEach(function (elem) {
          allExames.forEach(function (ex) {
            if (ex.unidadecurricular === elem) {
              result.push(ex);
            }
          })
        })
      })
    })
});

app.get('/addIndisponibilidade', function (req, res, next) {
  Professor.findById(req.query.professorid)
    .populate('professor')
    .exec(function (err, professorinstance) {
      if (err) {
        return next(err);
      }
      if (professorinstance == null) {
        var err = new Error('Professor not found');
        err.status = 404;
        return next(err);
      }
      let indisponibilidadedetail = {
        professor: professorinstance,
        inicio: req.query.inicio,
        fim: req.query.fim,
        justificacao: req.query.justificacao
      }

      var indisponibilidade = new Indisponibilidade(indisponibilidadedetail);
      indisponibilidade.save(function (err) {
        if (err) {
          return next(err);
        }
        res.json(indisponibilidade);
      });
    })
});

/**
 * status indisponibilidade:
 * - disponivel
 * - pendente
 * - aceite
 * - recusado
 */
app.get('/updateDisponibilidade', function (req, res, next){
  Vigilancia.findOneAndUpdate({_id:req.query.vigilanciaid},{indisponibilidade: req.query.indisponibilidade},
    true, function(err, vigilanciainstance){
      res.json(vigilanciainstance);
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));