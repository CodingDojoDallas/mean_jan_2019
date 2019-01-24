const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      mongoose   = require('./mongoose'),
    //   axios      = require('axios'),
      port       = 8000;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '/silverapp/dist/silverapp' ));
// app.set(path.join('views', __dirname, 'views'));
// app.set('view engine', 'ejs');

const Game = require('./games');

var routemyapp = function(){
    app.get('/games/new/',function(req,res){
        title=Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
        console.log(title,"!XXXXXX!");
        Game.create({silver:0,title:title},function(err,game){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Game created successfully", game:game});
            }
        })
    
    });
    app.get('/games/continue/:title',function(req,res){
        Game.findOne({title:req.params.title},function(err,game){
            console.log(req.params,'##########');
            if (err){res.json({message: "Error", error: err})}
            else {res.json(game)}
        })
    });
    app.put('/games/:id',function(req,res){
        Game.findOneAndUpdate(req.params.id,{silver:req.body.silver},function(err,game){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(game)}
        })
    });
}


routemyapp();
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
