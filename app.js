const express = require('express');
const router = require('./routes/index');
const app = express();
const port = 3000;
require('dotenv').config()

app.use(express.json());
app.use(router);

app.listen(port, () => {
    console.log('server is listening on port', port);
});
