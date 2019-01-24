const mongoose=require('mongoose');
const Schema = mongoose.Schema;
    
const cakeSchema = new Schema({
    name:String, 
    description: {type:String, default:''},
    baker: String,
    img_url:String,
    comments: {type: Array, default: []},
    newcommentstars:{type:Number,default:0},
    newcommenttext:{type:String, default:''}
    },
    {timestamps:true});
const Cake = mongoose.model('Cake',cakeSchema);
module.exports= Cake;