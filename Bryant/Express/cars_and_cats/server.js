// Load the express module and store it in the variable express (Where do you think this comes from?)
var express = require("express");
console.log("Let's find out what express is", express);
// invoke express and store the result in the variable app
var app = express();
console.log("Let's find out what app is", app);
// use app's get method and pass it the base route '/' and a callback

// tell the express app to listen on port 8000, always put this at the end of your server.js file
app.listen(8000, function() {
  console.log("listening on port 8000");
});
app.use(express.static(__dirname + "/static"));

app.set('views', __dirname + '/views'); 
// Now lets set the view engine itself so that express knows that we are using ejs as opposed to another templating engine like jade
app.set('view engine', 'ejs');

app.get('/', function(request, response) {
  response.render('main')
});
app.get("/cars", function(request, response){
  response.render('cars');
});
app.get("/cats", function(request, response){
  response.render('cats');
});
app.get("/cars/new", function(request, response){
  response.render('form');
});
app.get("/cats/1", function(request, response){
  var name = "Cupid";
  var food = "Tuna";
  var toys =[ "laser", "ball", "post" ];
  var img = '/images/cat1.jpg';
  var age = '6'
  response.render('details', {toys: toys, name: name, food: food, img: img, age: age})
})
app.get("/cats/4", function(request, response){
  var name = "Jesse";
  var food = "Pork";
  var toys =[ "bell", "feather", "playhouse" ];
  var img = '/images/cat2.jpg';
  var age = '2'
  response.render('details', {toys: toys, name: name, food: food, img: img, age: age})
})
app.get("/cats/2", function(request, response){
  var name = "Sweetie";
  var food = "Salmon";
  var toys =[ "yarn", "ball", "scratching mat" ];
  var img = '/images/cat3.jpg';
  var age = '1'
  response.render('details', {toys: toys, name: name, food: food, img: img, age: age})
})
app.get("/cats/3", function(request, response){
  var name = "Snuggles";
  var food = "Veggies";
  var toys =[ "laser", "ball", "post" ];
  var img = '/images/cat4.jpg';
  var age = '8'
  response.render('details', {toys: toys, name: name, food: food, img: img, age: age})
})

app.get("/stylesheets/cars.css", function(request, response){
  response.sendfile('./static/cars.css');
});
app.get("/stylesheets/cats.css", function(request, response){
  response.sendfile('./static/cats.css');
});