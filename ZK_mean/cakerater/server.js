const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      mongoose   = require('./mongoose'),
      port       = 9700;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '/cakeapp/dist/cakeapp' ));
// app.set(path.join('views', __dirname, 'views'));
// app.set('view engine', 'ejs');

const Cake = require('./cakes');

var routemyapp = function(){
    app.get('/cakes/all',function(req,res){
        Cake.find({},function(err,cakes){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(cakes)}
        })
    });
    app.post('/cakes/new/',function(req,res){
        Cake.create({name:req.body.name,description:req.body.description,baker:req.body.baker,img_url:req.body.img_url},function(err,cake){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Cake entered successfully", cake:cake})}
        })
    
    });

    app.delete('/cakes/destroy/:id',function(req,res){
        Cake.findByIdAndRemove(req.params.id,function(err,cake){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Cake eating successful"})}
        })
    });

    app.get('/cakes/:id',function(req,res){
        Cake.findById(req.params.id,function(err,cake){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(cake)}
        })
    });
    app.put('/cakes/:id',function(req,res){
        Cake.findById(req.params.id,function(err,cake){
            if (err){res.json({message: "Error", error: err})}
            else {
                cake.comments.push(req.body);
                cake.save();
                res.json(cake);}
        })
    });
    app.all("*",function(req,res){
        res.sendFile(path.resolve("./cakeapp/dist/cakeapp/index.html"))
    });


}
routemyapp();
app.listen(port, function() {
    console.log(`this server's rocking on H0T ${port} FM`);
})
