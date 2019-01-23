var User = require('../models/user')

module.exports = {

  users: function(req, res) {
    sleep(1).then(() => {
      User.find({}, function(err, users) {
        if (err) {
          res.json({'err': 'Ooooopsies'});
        }
        else {
          res.json(users);
        }
      })
    })
  },

  edit: function(req, res) {
    console.log('params:', req.params);
    console.log('body:', req.body);
    User.findOneAndUpdate(req.params.uid, {first_name: req.body.first_name, age: req.body.age}, {new: true}, function(err, user) {
        if (err) {
          res.json({'err': 'Ooooopsies'});
          console.log('some message');
        }
        else {
          console.log('callback user:', user);
          res.json(user);
        }
    });
  }
}

const sleep = (milliseconds) => {
  return new Promise(resolve => setTimeout(resolve, milliseconds))
}
