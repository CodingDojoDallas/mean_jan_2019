const express    = require('express'),
      app        = express(),
      path       = require('path'),
      bodyParser = require('body-parser'),
      port       = 9700;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '/coinapp/dist/coinapp' ));
// app.set(path.join('views', __dirname, 'views'));
// app.set('view engine', 'ejs');

var routemyapp = function(){
    app.all("*",function(req,res){
        res.sendFile(path.resolve("./coinapp/dist/coinapp/index.html"))
    });


}
routemyapp();
app.listen(port, function() {
    console.log(`this server's rocking on H0T ${port} FM`);
})
