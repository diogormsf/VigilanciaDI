
console.log('This script populates some test books, authors, genres and bookinstances to your database. Specified database as argument - e.g.: populatedb mongodb+srv://cooluser:coolpassword@cluster0-mbdj7.mongodb.net/local_library?retryWrites=true');

/*
if (!userArgs[0].startsWith('mongodb')) {
    console.log('ERROR: You need to specify a valid mongodb URL as the first argument');
    return
}
*/
var async = require('async')
var Exame = require('./models/Exame')
var Vigilancia = require('./models/Vigilancia')
var Professor = require('./models/Professor')
var mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:admin@cluster0-7elnd.azure.mongodb.net/local_library?retryWrites=true", {
  useNewUrlParser: true
});
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

var exames = []
var professores = []
var vigilancias = []

function exameCreate(codigo, disciplina, semestre, epoca, data, dia, inicio, fim, sala, cb) {
  examedetail = { 
    codigo: codigo,
    disciplina: disciplina,
    semestre: semestre,
    epoca: epoca,
    data: data,
    dia: dia,
    inicio: inicio,
    fim: fim,
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

function professorCreate(nome,estatuto, cb) {
  professordetail = { 
    nome: nome,
    estatuto: estatuto
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

function vigilanciaCreate(professor,exame, cb) {
  vigilanciadetail = { 
    professor: professor,
    exame: exame
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

function createExames(cb) {
    async.parallel([
        function(callback) {
          exameCreate(
            1234, 'Projeto de Sistemas de Informação', 2,1,new Date(),'Segunda',new Date(),new Date(),["2.4.4"], callback);
        },
        function(callback) {
          exameCreate(
            1234, 'Projeto de Sistemas de Informação', 2,2,new Date(),'Segunda',new Date(),new Date(),["2.4.4"], callback);
        }
        ],
        // optional callback''
        cb);
}

function createProfessores(cb) {
  async.parallel([
      function(callback) {
        professorCreate(
          'Mário Calha', 'Catedrático', callback);
      },
      function(callback) {
        professorCreate(
          'Carlos Duarte', 'Catedrático', callback);
      }
      ],
      // optional callback''
      cb);
}

function createVigilancias(cb) {
  async.parallel([
      function(callback) {
        vigilanciaCreate(
          professores[0],exames[0], callback);
      },
      function(callback) {
        vigilanciaCreate(
          professores[0],exames[0], callback);
      }
      ],
      // optional callback''
      cb);
}

async.series([
    createExames,
    createProfessores,
    createVigilancias
],
// Optional callback
function(err, results) {
    if (err) {
        console.log('FINAL ERR: '+err);
    }
    else {
        console.log('Exames: '+ exames);
        
    }
    // All done, disconnect from database
    mongoose.connection.close();
});



