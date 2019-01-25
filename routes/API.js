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

router.get('/cake/:id', async (req, res) => {
  let result = await Cake.getCakeByIdFromDB(req.params.id);
  if (result == null) {
    res.status(500).send('Couldnt find that cake !');
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

router.put('/cakes/:id', (req, res) => res.send());

router.delete('/cakes/:id', async (req, res) => {
  console.log(req.body.id);
  let result = await Cake.removeCakeByIdFromDB(req.params.id);
  res.status(204).send(result);
});

module.exports = router;
