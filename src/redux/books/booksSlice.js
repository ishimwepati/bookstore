import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  books: [], // Initial state as an empty array
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBook: (state, action) => {
      // Add the new book to the books array
      state.books.push(action.payload);
    },
    removeBook: (state, action) => {
      // Remove a book by its ID from the books array
      state.books = state.books.filter((book) => book.id !== action.payload);
    },
  },
});

// Export the actions
export const { addBook, removeBook } = booksSlice.actions;

// Export the reducer
export default booksSlice.reducer;
