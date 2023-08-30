import { createSlice } from '@reduxjs/toolkit';

const categoriesSlice = createSlice({
  name: 'categories',
  initialState: [],
  reducers: {
    // Reducer functions here
  },
});

export const { /* specify the properties you want to destructure */ } = categoriesSlice.actions;

export default categoriesSlice.reducer;
