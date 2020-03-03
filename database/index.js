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


module.exports = {
  db,
  // getData,
  // updateData,
  // deleteData,
  // createData,
};
