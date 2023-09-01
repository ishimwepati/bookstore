import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Define your initial state
const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

// Define your async thunks
export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  // Your async logic for fetching books should go here
  const response = await fetch('your-api-endpoint');
  const data = await response.json();
  return data; // This is what will be available as action.payload in your reducers
});

export const addBookAsync = createAsyncThunk('books/addBookAsync', async (bookData) => {
  // Your async logic for adding a book should go here
  await fetch('your-api-endpoint', {
    method: 'POST',
    body: JSON.stringify(bookData),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return bookData;
});

export const removeBookAsync = createAsyncThunk('books/removeBookAsync', async (bookId) => {
  // Your async logic for removing a book should go here
  await fetch(`your-api-endpoint/${bookId}`, {
    method: 'DELETE',
  });
  return bookId;
});

// Create a slice
const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBookAsync.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBookAsync.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export const { reducer } = booksSlice;
export default booksSlice.reducer;
