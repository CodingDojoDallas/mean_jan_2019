const express    = require('express'),
      app        = express(),
      path       = require('path'),
    //   bodyParser = require('body-parser'),
    //   mongoose   = require('./mongoose'),
      axios      = require('axios'),
      port       = 8000;

// app.use(bodyParser.json());
// app.use(express.static(path.join(__dirname, 'static')));
app.use(express.static( __dirname + '../shintocoin/shintoapp/dist/shintoapp' ));
// app.set(path.join('views', __dirname, 'views'));
// app.set('view engine', 'ejs');


var routemyapp = function(){
    app.all("*",function(req,res){
        res.sendFile(path.resolve("../shintocoin/shintoapp/dist/shintoapp/index.html"))
    });
}
routemyapp();
app.listen(port, function() {
    console.log(`listening on port ${port}`);
})
