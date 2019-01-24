const Gold = require('../models/gold');

module.exports = {
	
	all: function(req,res){
		console.log("Hi");
		var user = new Gold({amount:0, log:"Welcome to Ninja Gold"});
		console.log(user);
		user.save(function(err){
			if(err){
				res.json({message: "Error initializing gold."});
			}
			else{
				res.json({message: 'Let the games begin.', data: user})
			}
		})
	},
	save: function(req,res){
		
	}





}