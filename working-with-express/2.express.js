const express = require("express");

const app = express();

const PORT = 4001;

const HOSTNAME = 'localhost';

let counter = 3;

app.get('/', (req, res) => {
  res.json({ counter });
});

app.post('/increment', (req, res) => {
  counter += 1;
  res.json({ counter });
});

app.post('/decrement', (req, res) => {
  counter -= 1;
  res.json({ counter });
});

app.listen(PORT, () => {
  console.log(`Server is running at ${HOSTNAME}:${PORT}`);
});
