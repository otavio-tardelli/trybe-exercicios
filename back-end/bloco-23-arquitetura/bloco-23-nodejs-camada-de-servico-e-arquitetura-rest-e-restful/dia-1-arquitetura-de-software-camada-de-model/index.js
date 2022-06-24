const express = require('express');

const {getByAuthorId, getAll} = require('./models/Books');

const app = express();

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await getByAuthorId(author_id)
  : await getAll();

  return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`Rodando na porta ${PORT}`)
});
