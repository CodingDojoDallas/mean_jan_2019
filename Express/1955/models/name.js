const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const NameSchema = new mongoose.Schema({
  name: { type: String,
          minlength: [2, 'Must be greater than 2'],
  }, 
},{timestamps: true });

const Name = mongoose.model('Name', NameSchema);
module.exports = Name;