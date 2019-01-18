const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new mongoose.Schema({
  name: { type: String,
          minlength: [2, 'Must be greater than 2'],
          maxlength: [10, 'Must be less than 10'],
  },
  content: {
    type: String,
    default: '',
  },
  comments: [{ type: Schema.Types.ObjectId, ref: 'Comment' }]
}, {timestamps: true });

const Message = mongoose.model('Message', MessageSchema);
module.exports = Message;
