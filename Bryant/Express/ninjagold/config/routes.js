const gold_controller = require('../controllers/controller');

module.exports = function(app){

	app.get('/', gold_controller.all);
	// app.get('/farm', gold_controller.farmGold);
	// app.get('/cave', gold_controller.caveGold);
	// app.get('/house', gold_controller.houseGold);
	// app.get('/casino', gold_controller.casinoGold);
	

}