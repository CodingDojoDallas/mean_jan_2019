var mongoose = require('mongoose');

var QuoteSchema = new mongoose.Schema({
    name:  { type: String, required: true, minlength: 1},
    quote: { type: String, required: true, minlength: 1 },
}, {timestamps: true });

var Quote = mongoose.model('Quote', QuoteSchema);
module.exports = Quote;
