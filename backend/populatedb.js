console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Sala = require('./models/Sala')
var UnidadeCurricular = require('./models/UnidadeCurricular')
var Exame = require('./models/Exame')
var Vigilancia = require('./models/Vigilancia')
var Professor = require('./models/Professor')
var Indisponibilidade = require('./models/Indisponibilidade')
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0-7elnd.azure.mongodb.net/local_library?retryWrites=true", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var salas = []
var ucs = []
var exames = []
var professores = []
var vigilancias = []
var inds = []

function salaCreate(localizacao, lotacaoNormal, lotacaoExame, cb) {
  saladetail = {
    localizacao: localizacao,
    lotacaoNormal: lotacaoNormal,
    lotacaoExame: lotacaoExame,
  }

  var sala = new Sala(saladetail);
  sala.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Sala: ' + sala);
    salas.push(sala)
    cb(null, sala)
  });
}

function ucCreate(nome, codigo, cb) {
  ucdetail = {
    nome: nome,
    codigo: codigo
  }

  var uc = new UnidadeCurricular(ucdetail);
  uc.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New UC: ' + uc);
    ucs.push(uc)
    cb(null, uc)
  });
}

function exameCreate(unidadecurricular, semestre, epoca, data, sala, cb) {
  examedetail = {
    unidadecurricular: unidadecurricular,
    semestre: semestre,
    epoca: epoca,
    data: data,
    sala: sala
  }

  var exame = new Exame(examedetail);
  exame.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Exame: ' + exame);
    exames.push(exame)
    cb(null, exame)
  });
}

function professorCreate(nome, estatuto, sabatica, gestor, responsavel, cb) {
  professordetail = {
    nome: nome,
    estatuto: estatuto,
    sabatica: sabatica,
    gestor: gestor,
    responsavel: responsavel
  }

  var professor = new Professor(professordetail);
  professor.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Exame: ' + professor);
    professores.push(professor)
    cb(null, professor)
  });
}

function vigilanciaCreate(professor, exame, cb) {
  vigilanciadetail = {
    professor: professor,
    exame: exame,
    indisponibilidade: 'disponivel'
  }

  var vigilancia = new Vigilancia(vigilanciadetail);
  vigilancia.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Vigilancia: ' + vigilancia);
    vigilancias.push(vigilancia)
    cb(null, vigilancia)
  });
}

function indisponibilidadeCreate(professor, inicio, fim, justificacao, cb) {
  inddetail = {
    professor: professor,
    inicio: inicio,
    fim: fim,
    justificacao: justificacao
  }

  var ind = new Indisponibilidade(inddetail);
  ind.save(function (err) {
    if (err) {
      cb(err, null)
      return
    }
    console.log('New Indisponibilidade: ' + ind);
    inds.push(ind)
    cb(null, ind)
  });
}

function createSalas(cb) {
  async.parallel([
      function (callback) {
        salaCreate('1.2.30', 80, 50,callback);
      },
      function (callback) {
        salaCreate('1.2.32', 100, 50,callback);
      },
      function (callback) {
        salaCreate('1.5.30', 60, 20,callback);
      },
      function (callback) {
        salaCreate('1.6.35', 80, 40, callback);
      },
      function (callback) {
        salaCreate('1.3.50', 20, 10, callback);
      },
      function (callback) {
        salaCreate('1.6.44', 120, 70, callback);
      }
    ],
    // optional callback''
    cb);
}

function createUC(cb) {
  async.parallel([
      function (callback) {
        ucCreate('Projeto de Sistemas de Informação', 1234, callback);
      },
      function (callback) {
        ucCreate('Sistemas Distribuidos', 5654, callback);
      },
      function (callback) {
        ucCreate('Principios da Programação', 1904, callback);
      },
      function (callback) {
        ucCreate('Arquitetura de Sistemas Computacionais', 1906, callback);
      }
    ],
    // optional callback''
    cb);
}

function createExames(cb) {
  async.parallel([
      function (callback) {
        exameCreate(
          ucs[0], 2, 1, new Date(2019, 6, 18, 9, 0, 0, 0), [salas[0], salas[1]], callback);
      },
      function (callback) {
        exameCreate(
          ucs[0], 2, 2, new Date(2019, 6, 29, 13, 0, 0, 0), [salas[0], salas[1]], callback);
      },
      function (callback) {
        exameCreate(
          ucs[1], 1, 1, new Date(2019, 1, 7, 9, 0, 0, 0), [salas[0], salas[1]], callback);
      },
      function (callback) {
        exameCreate(
          ucs[3], 1, 1, new Date(2019, 1, 15, 13, 0, 0, 0), [salas[1], salas[4]], callback);
      },
      function (callback) {
        exameCreate(
          ucs[2], 1, 1, new Date(2019, 01, 14, 9, 0, 0, 0), [salas[3], salas[4]], callback);
      }
    ],
    // optional callback''
    cb);
}

function createProfessores(cb) {
  async.parallel([
      function (callback) {
        professorCreate(
          'MÁRIO JOÃO BARATA CALHA', 'Auxiliar', false, false, [ucs[3]], callback);
      },
      function (callback) {
        professorCreate(
          'CARLOS ALBERTO PACHECO DOS ANJOS DUARTE', 'Auxiliar', false, false, [ucs[0]], callback);
      },
      function (callback) {
        professorCreate(
          'MANUEL JOÃO CANEIRA MONTEIRO DA FONSECA', 'Associado', false, true, [], callback);
      },
      function (callback) {
        professorCreate(
          'ALYSSON NEVES BESSANI', 'Auxiliar', false, false, [ucs[1]], callback);
      },
      function (callback) {
        professorCreate(
          'MARIA ISABEL ALVES BATALHA REIS DA GAMA NUNES', 'Auxiliar', false, false, [ucs[2]], callback);
      },
      function (callback) {
        professorCreate(
          'NUNO FUENTECILLA MAIA FERREIRA NEVES', 'Catedrático', true, false, [], callback);
      },
      function (callback) {
        professorCreate(
          'FERNANDO MANUEL VALENTE RAMOS', 'Auxiliar', false, false, [], callback);
      },
      function (callback) {
        professorCreate(
          'IBÉRIA VITÓRIA DE SOUSA MEDEIROS', 'Auxiliar', false, false, [], callback);
      },
      function (callback) {
        professorCreate(
          'ANTÓNIO MANUEL DA SILVA FERREIRA', 'Auxiliar', false, true, [], callback);
      }
    ],
    // optional callback''
    cb);
}

async.series([
    createSalas,
    createUC,
    createExames,
    createProfessores
  ],
  // Optional callback
  function (err, results) {
    if (err) {
      console.log('FINAL ERR: ' + err);
    }
    // All done, disconnect from database
    mongoose.connection.close();
  });