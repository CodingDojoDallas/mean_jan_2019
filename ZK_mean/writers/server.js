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

const Cake = require('./writers');

var routemyapp = function(){
    app.get('/api/writers/all',function(req,res){
        console.log('express server index function run');
        Cake.find({},function(err,cakes){
            if (err){res.json({message: "Error", error: err});console.log("index route error!")}
            else {res.json(cakes);console.log(cakes)}
        })
    });
    app.get('/api/writers/new',function(req,res){
        console.log('server create function run');
        Cake.create({name:"testguy"},function(err,cake){
            if (err){res.json({message: "Error", error: err});console.log('create rouute error')}
            else {res.json({message:"writer entered successfully", author:cake});console.log(cake,'created writer');}
        })
    
    });

    app.delete('/api/writers/destroy/:id',function(req,res){
        console.log("delete server function run");
        Cake.findByIdAndRemove(req.params.id,function(err,cake){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Writer eliminated successful"})}
        })
    });

    // app.get('/api/writers/:id',function(req,res){
    //     console.log("show server function run");
    //     Cake.findById(req.params.id,function(err,cake){
    //         if (err){res.json({message: "Error", error: err})}
    //         else {res.json(cake)}
    //     })
    // });
    // app.put('/api/writers/:id',function(req,res){
    //     console.log("edit server function run");
    //     Cake.findById(req.params.id,function(err,cake){
    //         if (err){res.json({message: "Error", error: err})}
    //         else {
    //             cake.name=req.body.name;
    //             cake.save();
    //             res.json(cake);}
    //     })
    // });
    app.all("*",function(req,res){
        console.log("initial page load");

        res.sendFile(path.resolve("./public/dist/public/index.html"))
    });


}
routemyapp();
app.listen(port, function() {
    console.log(`this server's rocking on H0T ${port} FM`);
})
