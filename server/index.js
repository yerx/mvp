const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('./public'));

// get all items
app.get('/api/adventures', (req, res) => {
  db.getData()
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => {
      res.status(400).json(`Error: ${err}`);
    });
});

// post
app.post('/api/adventures', (req, res) => {
  console.log('req.body', req.body);
  db.postData(req.body)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((err) => res.status(400).json(`Error: ${err}`));
});

app.listen(port, () => console.log(`Listening on port ${port}`));
