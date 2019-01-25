const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CakeSchema = new Schema({
  _id: Number,
  name: String,
  comment: String,
  imageUrl: String,
  yumFactor: String
});

var CountersSchema = new Schema({
    _id: String,
    sequence_value: Number
});

var Cake = mongoose.model('Cake', CakeSchema);
var Counters = mongoose.model('Counters', CountersSchema);

module.exports = { Cake, Counters };
