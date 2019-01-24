const message_controller = require('../controllers/messagescontroller');
const comment_controller = require('../controllers/commentscontroller');

module.exports = function(app){
	app.get('/' , message_controller.all);
	app.post('/messages', message_controller.new);
	app.post('/comments/:mid', comment_controller.new);
}