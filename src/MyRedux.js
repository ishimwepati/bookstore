import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addBook, removeBook } from './redux/books/booksSlice';
import './MyRedux.css';

function MyRedux() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  const handleAddBook = () => {
    const newBook = {
      item_id: 'item4',
      title: 'Learn at Microverse',
      author: ' WazaCode',
      category: 'Programming',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div className="container">
      <ul className="book-list">
        {books.map((book) => (
          <li key={book.item_id} className="book-item">
            {book.title}
            {' '}
            by
            {book.author}
            <button
              type="button"
              className="remove-button"
              onClick={() => handleRemoveBook(book.item_id)}
            >
              Remove Book
            </button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        className="add-button"
        onClick={handleAddBook}
      >
        Add Book
      </button>
    </div>
  );
}

export default MyRedux;
