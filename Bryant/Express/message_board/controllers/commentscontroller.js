const Message = require('../models/message');
const Comment = require('../models/comment');

module.exports = {

	new: function(res,req){
		Message.findById(req.params.mid, function(err, msg){
			if(err){
				for (var key in err.errors){
					req.flash('err_msg', err.errors[key].message);
				}
				return res.redirect('/');
			}
			else {
				Comment.create({name: req.body.name, desc: req.body.desc}, function(err, cmt){
					if (err){
						for( var key in err.errors){
							req.flash('err_msg', err.errors[key].message);
						}
					}
					else{
						msg.comments.push(cmt);
						msg.save();
					}
					return res.redirect('/');	
				});			
			}
		});
	}
}