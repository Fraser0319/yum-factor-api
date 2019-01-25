const express = require('express');
const router = express.Router();
const Cake = require('../models/Cake');

router.get('/', (req, res) => {
  res.status(200).send('api is all gooooood');
});

router.post('/cakes', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
  }

  let cake = {
    id: req.body.id,
    name: req.body.name,
    comment: req.body.comment,
    imageUrl: req.body.imageUrl,
    yumFactor: req.body.yumFactor
  };

  let result = await Cake.addCakeToDB(cake);
  res.status(200).send(result);
});

router.put('/cakes', (req, res) => res.send());

router.delete('/cakes', (req, res) => res.send());

module.exports = router;
