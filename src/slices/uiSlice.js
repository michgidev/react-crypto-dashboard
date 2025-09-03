import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isModalOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setIsModalOpen: (state, action) => {
      state.isModalOpen = action.payload
    },
  }
});

export const { 
  setLoading,
  setIsModalOpen
} = uiSlice.actions;

export default uiSlice.reducer;