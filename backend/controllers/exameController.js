var Exame = require('../models/Exame');

exports.exame_list = function(req, res, next) {

    Exame.find({}, 'title author')
      .populate('author')
      .exec(function (err, list_exames) {
        if (err) { return next(err); }
        //Successful, so render
        res.render('exame_list', { title: 'Exame List', exame_list: list_exames});
      });
      
};