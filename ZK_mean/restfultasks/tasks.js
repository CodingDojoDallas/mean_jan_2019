const mongoose=require('mongoose');
const Schema = mongoose.Schema;
    
const taskSchema = new Schema({
    name:String, 
    title:String,
    description: {type:String, default:''},
    completed:{type:Boolean,default:false}
    },
    {timestamps:true});
const Task = mongoose.model('Task',taskSchema);
module.exports= Task;