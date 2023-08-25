import React from 'react';
import IndividualBook from './IndividualBook';
import './BookList.css'; // Import the CSS file

function BookList({ books, onDelete }) {
  return (
    <div className="book-list-container">
      <div className="book-list">
        {books.map((book) => (
          <div key={book.id}>
            <IndividualBook book={book} onDelete={onDelete} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
