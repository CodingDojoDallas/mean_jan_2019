const Quote = require('../models/quotes');

module.exports = {

	home: function(req, res){
		res.render('index');
	},

	new: function(req, res){
		var quote = new Quote({name: req.body.name, quote: req.body.quote});
    	quote.save(function(err){
        	if(err){
            	
            	res.redirect('/');
        	}
        	else {
            	res.redirect('/quotes');
        	}
    	});
		
	},

	all: function(req,res){
		Quote.find({}, function(err, quotes){
			if (err) {
        		res.redirect('/')
      		}
      		else {
      			console.log(quotes)
				res.render('quotes',{quotes})
			}
		});
	},
}