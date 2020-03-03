const mongoose = require('mongoose');

const adventureSchema = new mongoose.Schema({
  id: Number,
  imageUrl: String,
  category: String,
  description: String,
  details: String,
  city: String,
  state: String,
  review: String,
});

const Adventure = mongoose.model('Adventure', adventureSchema);

module.exports = Adventure;
