const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.PORT || 5000;

app.use(express.static('./public'));

app.listen(port, () => console.log(`Listening on port ${port}`));
