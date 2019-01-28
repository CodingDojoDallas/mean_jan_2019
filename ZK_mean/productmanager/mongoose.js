const path     = require('path'),
      fs       = require('fs'),
      mongoose = require('mongoose');

// MAKE SURE YOU CHANGE THE NAME OF YOUR DB HERE!
mongoose.connect('mongodb://localhost/my_first_db', { useNewUrlParser: true })
require('./products.js');