const express = require('express');

const Book = require('./models/Books');

const app = express();

app.get('/books', async (_req, res) => {
  const books = await Book.getAll();
  return res.status(200).json(books);
});

const PORT = process.env.PORT || 3000;

app.listen(PORT,() => {
  console.log(`Rodando na porta ${PORT}`)
});
