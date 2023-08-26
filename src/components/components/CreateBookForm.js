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
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          aria-label="Title"
        />
      </div>
      <div className="input-group">
        <input
          type="text"
          id="author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          required
          aria-label="Author"
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
