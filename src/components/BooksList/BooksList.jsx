const BooksList = ({ books }) => {
  return (
    <ul>
      {books.map((book) => (
        <li key={book.id}>
          <h2>{book.title}</h2>
        </li>
      ))}
    </ul>
  );
};

export default BooksList;
