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

module.exports = {getAll};