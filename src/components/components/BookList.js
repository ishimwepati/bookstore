import React from 'react';
import IndividualBook from './IndividualBook';
import './BookList.css'; // Import the CSS file

function BookList({ books, onDelete }) {
  return (
    <div className="book-list">
      {books.map((book) => (
        <IndividualBook key={book.id} book={book} onDelete={onDelete} />
      ))}
    </div>
  );
}

export default BookList;
