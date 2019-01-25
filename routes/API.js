const express = require('express');
const router = express.Router();
const Cake = require('../models/Cake');

router.get('/cakes', async (req, res) => {
  let result = await Cake.getAllCakesFromDB();
  if (result.error) {
    res.status(500).send('There was an error returning your cakes !');
  }
  res.status(200).send(result);
});

router.post('/cakes', async (req, res) => {
  if (!req.body) {
    res.status(400).send('Bad Request');
  }

  let cake = {
    name: req.body.name,
    comment: req.body.comment,
    imageUrl: req.body.imageUrl,
    yumFactor: req.body.yumFactor
  };

  let result = await Cake.addCakeToDB(cake);
  if (result.error) {
    res.status(500).send('There was an error trying to add your new cake !');
  }
  res.status(200).send(result);
});

router.put('/cakes', (req, res) => res.send());

router.delete('/cakes', async (req, res) => {
    let result = await Cake.removeCakeByIdFromDB(2);
    res.status(204).send(result)
});

module.exports = router;
