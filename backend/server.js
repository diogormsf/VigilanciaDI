const express = require('express')
const app = express()
const port = 4000

var Exame = require('./models/Exame');
var UnidadeCurricular = require('./models/UnidadeCurricular');
var Sala = require('./models/Sala');
var Professor = require('./models/Professor');
var Vigilancia = require('./models/Vigilancia');
var Indisponibilidade = require('./models/Indisponibilidade');

//Set up mongoose connection
var mongoose = require('mongoose');
var mongoDB = "mongodb+srv://admin:admin@cluster0-7elnd.azure.mongodb.net/local_library?retryWrites=true";
mongoose.connect(mongoDB, {
    useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.get('/login', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    switch (req.query.username) {
        case 'mjfonseca@ciencias.ulisboa.pt':
            if (req.query.password === 'admin') {
                res.json({
                    'result': 'success',
                    'role': 'gestor',
                    'professorid': '5ce41b885855493424632074'
                });
            } else {
                res.json({
                    'result': 'wrong password',
                    'role': undefined,
                    'professorid': undefined
                });
            }
            break;
        case 'caduarte@ciencias.ulisboa.pt':
            if (req.query.password === 'admin') {
                res.json({
                    'result': 'success',
                    'role': 'responsavel',
                    'professorid': '5ce41b885855493424632073'
                });
            } else {
                res.json({
                    'result': 'wrong password',
                    'role': undefined,
                    'professorid': undefined
                });
            }
            break;
        case 'ivmedeiros@ciencias.ulisboa.pt':
            if (req.query.password === 'admin') {
                res.json({
                    'result': 'success',
                    'role': undefined,
                    'professorid': '5ce41b885855493424632079'
                });
            } else {
                res.json({
                    'result': 'wrong password',
                    'role': undefined,
                    'professorid': undefined
                });
            }
            break;
        default:
            res.json({
                'result': 'user not found',
                'role': undefined,
                'professorid': undefined
            });
            break;
    }
})

app.get('/getAllExames', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    Exame.find().populate('sala').populate('unidadecurricular')
        .exec(function (err, examelist) {
            console.log(examelist);
            res.json(examelist);
        });

});

app.get('/getExameById', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    Exame.findById(req.query.id)
        .populate('exame').populate('sala')
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
    res.header('Access-Control-Allow-Origin', '*');
    Professor.find()
        .populate('responsavel')
        .exec(function (err, listprof) {
            res.json(listprof);
        })
});

app.get('/getProfessorById', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

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
    res.header('Access-Control-Allow-Origin', '*');

    Vigilancia.find()
        .populate('professor').populate('exame').populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'unidadecurricular'
            }
        })
        .populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'sala'
            }
        })
        .populate({
            path: 'professor',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'responsavel'
            }
        })
        .exec(function (err, list_vigilancias) {
            if (err) {
                return next(err);
            }
            res.json(list_vigilancias);
        });
});

app.get('/getVigilanciasByProfessor', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    Vigilancia.find({
            professor: req.query.idprofessor
        })
        .populate('professor').populate('exame').populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'unidadecurricular'
            }
        })
        .populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'sala'
            }
        })
        .populate({
            path: 'professor',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'responsavel'
            }
        })
        .exec(function (err, list_vigilancias) {
            if (err) {
                return next(err);
            }
            res.json(list_vigilancias);
        });
});

app.get('/getVigilanciasBySemestre', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    let semestre = []

    Vigilancia.find()
        .populate('professor').populate('exame').populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'unidadecurricular'
            }
        })
        .populate({
            path: 'exame',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'sala'
            }
        })
        .populate({
            path: 'professor',
            // Get friends of friends - populate the 'friends' array for every friend
            populate: {
                path: 'responsavel'
            }
        })
        .exec(function (err, list_vigilancias) {
            if (err) {
                return next(err);
            }
            list_vigilancias.forEach(function (elem) {
                if (('' + elem.exame.semestre) === ('' + req.query.semestre)) {
                    semestre.push(elem);
                }
            })
            res.json(semestre);
        })
});


app.get('/addVigilancia', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

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
 * Receives semestre -> sends calendar
 */
app.get('/createCalendar', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    let calendar = [];
    let semestre = [];
    Vigilancia.find()
        .populate('professor').populate('exame')
        .exec(function (err, list_vigilancias) {
            if (err) {
                return next(err);
            }
            list_vigilancias.forEach(function (elem) {
                console.log('' + elem.exame.semestre);
                console.log('' + req.query.semestre);

                if (('' + elem.exame.semestre) === ('' + req.query.semestre)) {
                    semestre.push(elem);
                }
            })
            console.log("jkasfjkasfkjsafsaf");
            console.log(semestre);
            if (semestre.length === 0) {
                let availableProf = [];
                Professor.find({}, function (err, allprofessores) {
                    allprofessores.forEach(function (elem) {
                        if (elem.sabatica === false && elem.gestor === false &&
                            elem.estatuto !== 'Catedrático' && elem.estatuto !== 'Associado') {
                            availableProf.push(elem);
                        }
                    })
                    Exame.find({
                        semestre: req.query.semestre
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
                                exame: allexames[i % allexames.length],
                                indisponibilidade: 'disponivel'
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
            } else {
                res.json(calendar);
            }
        });


});

app.get('/getVigilanciasResponsavel', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

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
            });
        })
});

app.get('/getExamesResponsavel', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

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
    res.header('Access-Control-Allow-Origin', '*');

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
                inicio: new Date(2019, 3, 10),
                fim: new Date(2019, 3, 20),
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

app.get('/getIndisponibilidade', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    let result = [];
    Indisponibilidade.find({}, function (err, allInd) {
        allInd.forEach(function (elem) {
            let exames = [];
            Exame.find({
                "date": {
                    "$gte": elem.inicio,
                    "$lt": elem.fim
                }
            }, function (req, res, next) {
                res.forEach(function (ex) {
                    exames.push(ex);
                })
            })
            result.push({
                'indisponibilidade': elem,
                'exames': exames
            });
        })
    })
})

/**
 * status indisponibilidade:
 * - disponivel
 * - pendente
 * - aceite
 * - recusado
 */
app.get('/updateDisponibilidade', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');

    Vigilancia.findOneAndUpdate({
            _id: req.query.vigilanciaid
        }, {
            indisponibilidade: req.query.indisponibilidade
        },
        function (err, vigilanciainstance) {
            res.json(vigilanciainstance);
        });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
