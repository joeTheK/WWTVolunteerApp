const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const env.process.NODE_ENV;
const port = process.env.PORT || 5000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.json());

app.listen(PORT, () => {
    console.log('server listening on ${PORT}...');
})