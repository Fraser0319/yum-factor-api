const express = require('express');
var bodyParser = require('body-parser');
const api = require('./routes/api');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
require('dotenv').config();

app.use(bodyParser.json());
app.use('/api/v1', api);

mongoose.connect(process.env.MONGO_CONNECT);

var db = mongoose.connection;
db.on('error', console.error.bind('Connection Error'));
db.once('open', function() {
  console.log('Connected Successfully');
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
