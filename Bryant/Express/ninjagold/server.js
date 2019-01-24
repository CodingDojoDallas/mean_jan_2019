var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('./config/mongoose'),
    path = require('path'),
    flash = require('express-flash'),
    session = require('express-session');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './static')));
app.use(bodyParser.json());
app.use(session({
    secret: 'keyboardkitteh',
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 60000 }
  }))
app.use(express.static(__dirname + '/angularapp/dist/angularapp'));
require('./config/routes.js')(app);
app.listen(8000, function() {
    console.log("listening on port 8000");
})
mongoose.Promise = global.Promise;

