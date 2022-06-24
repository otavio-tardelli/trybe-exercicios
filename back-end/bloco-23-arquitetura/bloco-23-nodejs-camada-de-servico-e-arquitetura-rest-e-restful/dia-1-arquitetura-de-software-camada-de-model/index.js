const express = require('express');

const {getByAuthorId, getAll, getById} = require('./models/Books');

const app = express();

app.get('/books', async (req, res) => {
  const { author_id } = req.query;

  const books = (author_id)
  ? await getByAuthorId(author_id)
  : await getAll();

  return res.status(200).json(books);
});

app.get('/book/:id', async (req, res) => {
  const {id} = req.params;

  const book = await getById(id);

  if (!book) return res.status(404).json({message: 'livro inválido'});

  return res.status(200).json(book);
})

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`Rodando na porta ${PORT}`)
});
