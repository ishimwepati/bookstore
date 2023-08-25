import React, { useState } from 'react';
import books from './components/bookData'; // Import 'books' from bookData
import BookList from './components/BookList';
import CreateBookForm from './components/CreateBookForm';
import './HomePage.css';

function HomePage() {
  const [bookList, setBookList] = useState(books);

  const handleDeleteBook = (bookId) => {
    const updatedBooks = bookList.filter((book) => book.id !== bookId);
    setBookList(updatedBooks);
  };

  const handleAddBook = (newBook) => {
    const updatedBook = { ...newBook }; // Create a copy of newBook
    updatedBook.id = bookList.length + 1; // Update the copy
    setBookList([...bookList, updatedBook]); // Use the updated copy
  };

  return (
    <div>
      <h1>Waza BookStore</h1>
      <BookList books={bookList} onDelete={handleDeleteBook} />
      {' '}
      {/* Pass onDelete prop */}
      <CreateBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default HomePage;
