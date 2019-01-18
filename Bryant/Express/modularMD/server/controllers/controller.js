const Animal = require('../models/animal');

module.exports={
	all: function(req, res){
		Animal.find({}, function(err, animals){
			if (err) {
        		res.redirect('/')
      		}
      		else {
      			console.log(animals)
				res.render('index',{all_animals: animals})
			}
		});
	},
	fresh: function(req, res){
		res.render('new')
	},
	create: function(req, res){
		var animal = new Animal({name: req.body.name, color: req.body.color, pack_size: req.body.pack_size});
 		animal.save(function(err) {
    		if(err) {
      			res.redirect('/animals/new')
    		} 
    		else {
    			res.redirect('/')
    		}
		});
	},
	edit: function(req, res){
		var animal = Animal.findById(req.params.id, function(err, animal){
			if(err){
				res.redirect('/')
			}
			else{
				res.render('edit', {animal})
			}
		});
	},
	change: function(req, res){
		var animal = Animal.update({_id: req.params.id}, 
								   {name: req.body.name, color: req.body.color, pack_size: req.body.pack_size},
								   function(err){
										if(err) {
      											res.redirect('/')
    									} 
    									else {
    											res.redirect('/animals/user.id')
    									}
								    });
		
	},
	show: function(req, res){
		Animal.findById(req.params.id, function(err, animal){
			if(err){
				res.redirect('/')
			}
			else {
				res.render('show', {animal})
			}
		});
			
	},
	rid: function(req, res){
		Animal.remove({_id: req.params.id}, 
					    function(err, animal){
							if(err){
								res.redirect('/')
							}
							else{
								res.redirect('/')
							}
						});
	},
}