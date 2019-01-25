const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var CakeSchema = new Schema({
  id: Number,
  name: String,
  comment: String,
  imageUrl: String,
  yumFactor: String
});

var Cake = mongoose.model('Cake', CakeSchema);

module.exports = { Cake };
