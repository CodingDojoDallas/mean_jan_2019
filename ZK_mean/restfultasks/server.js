const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      mongoose   = require('./mongoose'),
      axios      = require('axios'),
      port       = 8000;

app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '/public/dist/public' ));
// app.set(path.join('views', __dirname, 'views'));
// app.set('view engine', 'ejs');

const Task = require('./tasks');

var routemyapp = function(){
    app.get('/all',function(req,res){
        Task.find({},function(err,tasks){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(tasks)}
        })
    });

    app.post('/new/',function(req,res){
        Task.create({title:req.body.title,description:req.body.description},function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Task created successfully", task:task})}
        })
    
    });

    app.delete('/destroy/:id',function(req,res){
        Task.findByIdAndRemove(req.params.id,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json({message:"Delete successful"})}
        })
    });

    app.get('/:id',function(req,res){
        Task.findById(req.params.id,function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    });
    app.put('/:id',function(req,res){
        Task.findOneAndUpdate(req.params.id,{title:req.body.title,description:req.body.description},function(err,task){
            if (err){res.json({message: "Error", error: err})}
            else {res.json(task)}
        })
    });
}
routemyapp();
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
