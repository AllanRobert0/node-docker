const express = require('express');
const path = require('path');

const PORT = 3000;
const HOST = '0.0.0.0';

const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/views/3dCssPlane/index.html'));
});

app.listen(PORT, HOST);