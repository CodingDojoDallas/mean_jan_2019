const person = require('../controllers/name');

module.exports = function(app){
	
	app.get('/', person.all);
	app.get('/new/:name', person.new);
	app.get('/remove/:name', person.remove);
	app.get('/:name', person.show);

}