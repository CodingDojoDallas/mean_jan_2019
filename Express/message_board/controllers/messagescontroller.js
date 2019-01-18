const Message = require('../models/Message');

module.exports = {

	all: function(req,res){
		Message.find({}).
		populate('comments').
		exec(function(err,msgs){
			if(err){
				return res.render('index');
			}
			else{
				return res.render('index', {all_msg: msgs});
			}
		});
	},

	create: function(req,res){
		Message.create({name: req.body.name, desc:req.body.desc}, function(err,msgs) {
			if (err){
				for (var key in err.errors){
					req.flash('err_msg', err.errors[key].message);
				}
			}
			return res.redirect('/');
		});
	}
}