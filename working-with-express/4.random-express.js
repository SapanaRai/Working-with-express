const express = require('express');
const app = express();
const PORT = 7001;
const HOSTNAME = 'localhost';

// Define a route for '/random'
app.get('/random', (req, res) => {
  const randomNumber = Math.floor(Math.random() * 100); 
  res.json({ random: randomNumber });
});

app.listen(PORT, () => {
    console.log(`Server is running at ${HOSTNAME}:${PORT}`);
  });