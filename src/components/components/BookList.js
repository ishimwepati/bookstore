import React from 'react';
import PropTypes from 'prop-types';
import IndividualBook from './IndividualBook';
import './BookList.css';

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

BookList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default BookList;
