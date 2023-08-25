import React, { useState } from 'react';
import { books } from './components/bookData';
import BookList from './components/BookList';
import CreateBookForm from './components/CreateBookForm';

function HomePage() {
  const [bookList, setBookList] = useState(books);

  const handleDeleteBook = (bookId) => {
    const updatedBooks = bookList.filter((book) => book.id !== bookId);
    setBookList(updatedBooks);
  };

  const handleAddBook = (newBook) => {
    newBook.id = bookList.length + 1;
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      <h1>Waza BookStore</h1>
      <BookList books={bookList} onDelete={handleDeleteBook} /> {/* Pass onDelete prop */}
      <CreateBookForm onAddBook={handleAddBook} />
    </div>
  );
}

export default HomePage;
