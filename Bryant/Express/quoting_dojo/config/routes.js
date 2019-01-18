var quote = require('../controllers/controller');

module.exports = function(app){
	app.get('/', quote.home);
	app.post('/quotes', quote.new);
	app.get('/quotes', quote.all);
}