const express = require('express');
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.json());

app.get('/ping', (_req, res) => {
  res.json({
    message: 'pong'
  });
});

app.post('/hello', (req, res) => {
  const { name } = req.body;
  return res.status(200).json({
    message: `Hello, ${name}!`
  })
});

app.post('/greetings', (req, res) => {
  if (user > 17) {

  }
})

app.listen(3001, () => console.log('ouvindo na porta 3001'));