const mongoose=require('mongoose');
const Schema = mongoose.Schema;
    
const writerSchema = new Schema({
    name:String
    },
    {timestamps:true});
const Cake = mongoose.model('Cake',writerSchema);
module.exports= Cake;