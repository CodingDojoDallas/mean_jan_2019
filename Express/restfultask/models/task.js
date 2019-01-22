const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = new mongoose.Schema({
  title: { type: String,
          minlength: [2, 'Must be greater than 2'],
  }, 
  desc: { type:String,
  				default: '',
  			},
  completed: {type: Boolean,
  			  default: false,
  			},
  			
},{timestamps: true });

const Task = mongoose.model('Task', TaskSchema);
module.exports = Task;