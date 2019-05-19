var Exame = require('../models/Exame');

exports.exame_list = function(req, res, next) {

    Exame.find().all();
      
};