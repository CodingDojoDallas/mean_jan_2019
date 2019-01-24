var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    path = require('path');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/angularapp/dist/angularapp'));

app.listen(8000, function() {
    console.log("listening on port 8000");
})

