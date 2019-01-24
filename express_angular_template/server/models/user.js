var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: '',
  },
  age: {
    type: Number,
    default: 0,
  },
}, {timestamps: true });

module.exports = mongoose.model('User', UserSchema);
