const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      mongoose   = require('./mongoose'),
      port       = 9700;
      axios      = require('axios');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '/public/dist/public' ));

const Product = require('./products');

var routemyapp = function(){
    app.post('/api/products/new',function(req,res){
        Product.create({name:req.body.name,price:req.body.price,description:req.body.description,img_url:req.body.img_url},function(err,item){
            {res.json({errors:err,output:item})};
        });
    });
    app.get('/api/products/index',function(req,res){
        Product.find({},function(err,items){
            {res.json({errors:err,output:items})};
        });
    });
    app.get('/api/products/:id',function(req,res){
        Product.findById(req.params.id,function(err,item){
            {res.json({errors:err,output:item})};
        });
    });
    app.put('/api/products/:id',function(req,res){
        Product.findById(req.params.id,function(err,item){
            if (err){
                console.log("update error");
                res.json({error:err})}
            else {
                console.log('update starting',req.body);
                item.name=req.body.edits.name;
                item.description=req.body.edits.description;
                item.price=req.body.edits.price;
                item.img_url=req.body.edits.img_url;
                item.save((err)=>{
                    if (err){
                        console.log("item saving issues");
                        res.json({error:err});
                    }
                    else {
                        console.log("save successful?");
                        res.json({output:item})}
                });
            };
        });
    });
    app.delete('/api/products/:id',function(req,res){
        Product.findByIdAndRemove(req.params.id,function(err,item){
            {res.json({errors:err,output:item})};
        });
    });
    app.all("*",function(req,res){
        console.log("initial page load");

        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });


}
routemyapp();
app.listen(port, function() {
    console.log(`this server's rocking on H0T ${port} FM`);
})
