// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Express route handlers
app.get('/', (req, res) => {
  console.log('BLAHA');
  res.send('Hello From NodeJS!');
});

app.get('/data', async (req, res) => {
  res.send('This is data from Express!');
});

app.post('/data', async (req, res) => {
  const body = req.body;
  console.log({ body });
  res.send('Data has been saved...');
});

app.listen(5000, () => {
  console.log('Listening on port: 5000');
});
