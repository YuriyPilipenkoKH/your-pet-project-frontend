import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  theme: JSON.parse(localStorage.getItem('theme')) || "light",
};
const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme: (state, action) => {
      if (state.theme === 'light') {
        state.theme = "dark";
        JSON.parse(localStorage.getItem('theme'))
        localStorage.setItem('theme', JSON.stringify("dark"));
      } else if (state.theme === 'dark') {
        state.theme = "light";
        JSON.parse(localStorage.getItem('theme'))
        localStorage.setItem('theme', JSON.stringify("light"));
      }
    },
  },
});
export const { toggleTheme } = themeSlice.actions;
// Export reducer
export const themeReducer = themeSlice.reducer;
