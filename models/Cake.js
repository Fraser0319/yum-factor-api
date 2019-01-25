const schema = require('./../schema');
const Promise = require('rsvp').Promise;

// get the next id in the sequence.
function getNextSequenceValue(sequenceName) {
  return new Promise((resolve, reject) => {
    schema.Counters.findOneAndUpdate(
      { _id: sequenceName },
      { $inc: { sequence_value: 1 } },
      { upsert: true },
      (err, callback) => {
        if (err) {
          reject(err);
        }
        return resolve(callback.sequence_value);
      }
    );
  });
}

// add cake to the db.
async function addCakeToDB(cake) {
  const Cake = schema.Cake;
  let newCake = new Cake({
    _id: await getNextSequenceValue('cakeId'),
    name: cake.name,
    comment: cake.comment,
    imageUrl: cake.imageUrl,
    yumFactor: cake.yumFactor
  });

  return new Promise((resolve, reject) => {
    Cake.findOneAndUpdate(
      { _id: newCake.id },
      newCake,
      { upsert: true },
      err => {
        if (err) {
          reject(err);
        }
        resolve(newCake);
      }
    );
  });
}

async function getAllCakesFromDB() {
  const Cake = schema.Cake;
  return new Promise((resolve, reject) => {
    Cake.find((err, callback) => {
      if (err) {
        reject(err);
      }
      resolve(callback);
    });
  });
}

async function removeCakeByIdFromDB(cakeId) {
  const Cake = schema.Cake;
  return new Promise((resolve, reject) => {
    Cake.findOneAndRemove({ _id: cakeId }, (err, callback) => {
      if (err) {
        reject(err);
      }
      resolve(callback);
    });
  });
}

async function getCakeByIdFromDB(cakeId) {
  const Cake = schema.Cake;
  return new Promise((resolve, reject) => {
    Cake.findById({ _id: cakeId }, (err, callback) => {
      if (err) {
        reject(err);
      }
      resolve(callback);
    });
  });
}
module.exports = {
  addCakeToDB,
  getAllCakesFromDB,
  removeCakeByIdFromDB,
  getCakeByIdFromDB
};
