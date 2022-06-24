const connection = require('./connection');

const getAll = async () => {
  const query = 'SELECT * FROM model_example.books;';
  const [books] = await connection.execute(query);
  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getByAuthorId = async () => {
  const query = 'SELECT * FROM model_example.books WHERE author_id=?;';
  const [books] = await connection.execute(query, [authorId]);

  return books.map(({id, title, author_id}) => ({
    id,
    title,
    authorId: author_id,
  }));
}

const getById = async (id) => {
  const query = 'SELECT * FROM model_example.books WHERE id=?;';

  const [books] = await connection.execute(query, [id]);

  if (books.length === 0) return null;


  return books.map(({id, title, author_id}) => ({
    id,
    title, 
    authorId: author_id,
  }))[0];
}

module.exports = {getAll, getByAuthorId, getById};