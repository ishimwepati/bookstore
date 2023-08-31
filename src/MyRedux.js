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
      title: 'New Book',
      author: 'Author Name',
      category: 'Fiction',
    };
    dispatch(addBook(newBook));
  };

  const handleRemoveBook = (itemId) => {
    dispatch(removeBook(itemId));
  };

  return (
    <div>
      <button type="button" onClick={handleAddBook}>Add Book</button>
      <ul>
        {books.map((book) => (
          <li key={book.item_id}>
            {book.title}
            {' '}
            by
            {book.author}
            <button type="button" onClick={() => handleRemoveBook(book.item_id)}>Remove Book</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default MyRedux;
