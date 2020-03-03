const express = require('express');

const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const db = require('../database/index.js');

app.use(express.static('./public'));

// get all info
app.get('/', (req, res) => {

});

// get all items
// get one item
// post
// put
// delete

app.listen(port, () => console.log(`Listening on port ${port}`));
