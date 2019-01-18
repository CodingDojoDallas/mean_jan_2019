const task_controller = require('../controllers/controller');

module.exports = function(app){

	app.get('/', task_controller.all);
	app.get('/user/:id', task_controller.show);
	app.get('/new/:title/:desc', task_controller.create);
	app.put('/edit/:id/:title/:desc/:complete', task_controller.update);
	app.delete('/destroy/:id', task_controller.destroy);

}