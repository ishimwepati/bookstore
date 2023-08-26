import React from 'react';
import PropTypes from 'prop-types';

function IndividualBook({ book, onDelete }) {
  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  return (
    <div className="individual-book">
      <h2>{book.title}</h2>
      <p>
        Author:
        {book.author}
      </p>
      <button className="delete-button" type="button" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}

IndividualBook.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    // Add more properties as needed
  }).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IndividualBook;
