'use strict';

const express = require('express');

// Constants
const PORT = 3478;
const HOST = 'localhost';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Bienvenue tout le mond');
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});