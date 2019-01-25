const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('api is all gooooood');
});

router.post('/cakes', (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
  }
  var id = req.body.id;
  var name = req.body.name;
  var comment = req.body.comment;
  var imageUrl = req.body.imageUrl;
  var yumFactor = req.body.yumFactor;

  console.log(
    'id: ' +
      id +
      ', name: ' +
      name +
      ' comment: ' +
      comment +
      ' imageUrl: ' +
      imageUrl +
      ' yumFactor: ' +
      yumFactor
  );
  res.stauts(200).send('yes');
});

router.put('/cakes', (req, res) => res.send());

router.delete('/cakes', (req, res) => res.send());

module.exports = router;
