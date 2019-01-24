const Name = require('../models/name');

module.exports = {

	all: function(req,res){
		Name.find({}, function(err, names){
			if (err){
				res.json({message: "Error", error: err})
			}
			else {
				res.json({message: "Success", data: names})
			}
		})
	},

	new: function(req,res){
		var name = new Name({name: req.params.name});
		name.save(function(err) {
    		if(err) {
      			res.redirect('/')
    		} 
    		else {
    			res.json({message: "Successfully Added", data:name})
    		}
		});
	},

	remove: function(req,res){
		Name.remove({name: req.params.name}, 
					function(err, persons){
						if (err){
							res.send('error');

						}
						else {
							res.json({message: "Successfully Removed"});
						}
					}
		);
		
	},

	show: function(req,res){
		Name.find({name: req.params.name},
				   function(err,person){
				   		if (err){
				   			res.json({message: "Error getting person"});
				   		}
				   		else{
				   			res.json({message: 'Here is the person', data: person})
				   		}
				   });	
	},

}