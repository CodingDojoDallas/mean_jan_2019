const name_controller = require('../controllers/name');

module.exports = function(app){
	
	app.get('/', name_controller.all);
	app.get('/new/:name', name_controller.new);
	app.get('/remove/:name', name_controller.remove);
	app.get('/:name', name_controller.show);

}