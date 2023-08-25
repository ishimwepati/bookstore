import React, { useState } from 'react';
import { books } from './components/bookData';
import BookList from './components/BookList';
import CreateBookForm from './components/CreateBookForm'; // Import the CreateBookForm component

function HomePage() {
  // State to store the list of books
  const [bookList, setBookList] = useState(books);

  // Function to add a new book
  const handleAddBook = (newBook) => {
    // Generate a unique ID for the new book (You can use a library like uuid for this)
    newBook.id = bookList.length + 1;
    // Add the new book to the list
    setBookList([...bookList, newBook]);
  };

  return (
    <div>
      <h1>Waza BookStore</h1>
      <BookList books={bookList} /> {/* Display the list of books */}
      <CreateBookForm onAddBook={handleAddBook} /> {/* Display the form below */}
    </div>
  );
}

export default HomePage;
