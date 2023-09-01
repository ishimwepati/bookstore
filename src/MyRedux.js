// Update import paths in MyRedux.js
import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { fetchBooks, removeBookAsync } from './redux/books/booksSlice'; // Ensure the path is correct

function MyRedux() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const status = useSelector((state) => state.status);
  const error = useSelector((state) => state.error);

  useEffect(() => {
    // Fetch books when the component mounts
    dispatch(fetchBooks());
  }, [dispatch]);

  const handleRemoveBook = (itemId) => {
    // Dispatch the removeBookAsync action when a book is removed
    dispatch(removeBookAsync(itemId));
  };

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  return (
    <div>
      {status === 'succeeded' && books.length > 0 ? (
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
      ) : (
        <div>No books available.</div>
      )}
    </div>
  );
}

export default MyRedux;
