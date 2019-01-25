const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => res.send('Hello World!'));

app.post('/cakes', (req, res) => {
  var id = req.body.id;
  var name = req.body.name;
  var comment = req.body.comment;
  var imageUrl = req.body.imageUrl;
  var yumFactor = req.body.yumFactor;

  console.log('id: ' + id + ', name: ' + name + ' comment: ' + comment + ' imageUrl: ' + imageUrl + " yumFactor: " + yumFactor);
  res.send('yes');
});

app.put('/cakes', (req, res) => res.send());

app.delete('/cakes', (req, res) => res.send());

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
