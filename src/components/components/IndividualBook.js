import React from 'react';
import PropTypes from 'prop-types';

function IndividualBook({ book, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="individual-book">
      <h2>{book.title}</h2>
      <p>Author: {book.author}</p>
      <button className="delete-button" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

IndividualBook.propTypes = {
  book: PropTypes.object.isRequired, 
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
