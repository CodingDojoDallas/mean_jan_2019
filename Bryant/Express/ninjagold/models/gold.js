const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const GoldSchema = new mongoose.Schema({
    amount: { type: Number,
              default: 0,
    },     
    log: {
      type: String,
      minlength: [2, 'Must be greater than 2'],
      default: '',
    }
  },{timestamps: true });
  
  const Gold = mongoose.model('Gold', GoldSchema);
  module.exports = Gold;