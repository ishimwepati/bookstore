import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooks, addBookAsync, removeBookAsync } from './redux/books/booksSlice';
import './MyRedux.css';

function MyRedux() {
  const books = useSelector((state) => state.books.books);
  const status = useSelector((state) => state.books.status);
  const error = useSelector((state) => state.books.error); // Define the error variable
  const dispatch = useDispatch();

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchBooks());
    }
  }, [status, dispatch]);

  const handleAddBook = () => {
    const newBook = {
      title: 'Learn at Microverse',
      author: 'WazaCode',
      category: 'Programming',
    };
    dispatch(addBookAsync(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBookAsync(itemId));
  };

  return (
    <div className="container">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && (
      <div>
        Error:
        {error}
        {' '}
        {/* Display the error message */}
      </div>
      )}
      {status === 'succeeded' && (
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
      )}
      <button type="button" className="add-button" onClick={handleAddBook}>
        Add Book
      </button>
    </div>
  );
}

export default MyRedux;
