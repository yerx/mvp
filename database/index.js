const mongoose = require('mongoose');
const Adventure = require('./adventure.js');

const db = mongoose.connection;

const mongooseConnection = 'mongodb://localhost/mvp';

mongoose
  .connect(mongooseConnection, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Connection error: ', err));

const getData = () => new Promise((resolve, reject) => {
  Adventure.find()
    .exec((err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
});

const postData = (data) => new Promise((resolve, reject) => {
  const { imageUrl } = data;
  const { category } = data;
  const { description } = data;
  const { review } = data;

  const newAdventure = new Adventure({
    imageUrl,
    category,
    description,
    review,
  });

  newAdventure.save()
    .exec((err, result) => {
      if (err) {
        reject(err);
      }
      resolve(resul);
    });
});

module.exports = {
  db,
  getData,
  // updateData,
  // deleteData,
  postData,
};
