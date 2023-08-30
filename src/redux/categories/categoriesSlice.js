import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: [], // Initial state as an empty array
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    // Define any reducer actions for categories here
    // In your case, you mentioned checking status and returning "Under construction"
    checkStatus: (state) => {
      // Set the categories array to ["Under construction"]
      state.categories = ['Under construction'];
    },
  },
});

// Export the actions
export const { checkStatus } = categoriesSlice.actions;

// Export the reducer
export default categoriesSlice.reducer;
