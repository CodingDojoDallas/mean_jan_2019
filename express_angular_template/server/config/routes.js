var users = require('../controllers/users')

module.exports = function(app) {
  app.get('/users', users.users);
  app.put('/users/:uid', users.edit);
}
