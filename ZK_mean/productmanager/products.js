const mongoose=require('mongoose');
const Schema =mongoose.Schema;

const productSchema = new Schema({
    name:{type:String, required:[true,"Namee is required"], minlength:4},
    description:String,
    img_url:String,
    price:{type:Number,required:[true]}
    },
{timestamps:true}
);

const Product = mongoose.model('Product',productSchema);
module.exports=Product;