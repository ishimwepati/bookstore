import React, { useState } from 'react';
import './CreateBookForm.css';
import PropTypes from 'prop-types';

function CreateBookForm({ onAddBook }) {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title,
      author,
    };
    onAddBook(newBook);
    setTitle('');
    setAuthor('');
  };

  return (
    <form className="create-book-form" onSubmit={handleSubmit}>
      <div className="input-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title" // Make sure this matches the 'htmlFor' attribute
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label htmlFor="author">Author:</label>
        <input
          type="text"
          id="author" // Make sure this matches the 'htmlFor' attribute
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add Book</button>
    </form>
  );
}

CreateBookForm.propTypes = {
  onAddBook: PropTypes.func.isRequired,
};

export default CreateBookForm;
