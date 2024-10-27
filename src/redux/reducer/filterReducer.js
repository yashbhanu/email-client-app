import { createSlice } from "@reduxjs/toolkit";

export const filterSlice = createSlice({
  name: "filters",
  initialState: {
    read: [],
    favorites: [],
  },
  reducers: {
    readEmail: (state, action) => {
      state.read = [...state.read, action.payload];
    },
    addFavorite: (state, action) => {
        state.favorites = [...state.favorites, action.payload];
    },
    removeFavorite: (state, action) => {
      const fav = state.favorites.filter((id) => id !== action.payload)
      state.favorites = [...fav];
    }
  },
});

export const { readEmail, addFavorite, removeFavorite } = filterSlice.actions;

export default filterSlice.reducer;
