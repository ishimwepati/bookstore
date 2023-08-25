import React, { useState } from 'react';
import { books } from './components/bookData';
import BookList from './components/BookList';
import CreateBookForm from './components/CreateBookForm'; // Import the CreateBookForm component

function HomePage() {
  
  const [bookList, setBookList] = useState(books);

  
  const handleAddBook = (newBook) => {
   
    newBook.id = bookList.length + 1;
   
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      <h1>Waza BookStore</h1>
      <BookList books={bookList} /> 
      <CreateBookForm onAddBook={handleAddBook} /> 
    </div>
  );
}

export default HomePage;
