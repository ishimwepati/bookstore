import React from 'react';
import './BookList.css'; // Import the CSS file

function IndividualBook({ book, onDelete }) {
  return (
    <div className="individual-book">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      {/* Add more book details */}
      <button className="delete-button" onClick={() => onDelete(book.id)}>
        Delete
      </button>
    </div>
  );
}

export default IndividualBook;
