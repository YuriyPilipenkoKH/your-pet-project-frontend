import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    theme: 'dark',
    
  };
  const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        
      toggleTheme: (state, action) => {
       
        if(state.theme === 'light'){
            state.theme = 'dark'
        }
        else if(state.theme === 'dark'){
            state.theme = 'light'
        }
      },
    },
  });
  export const { toggleTheme } = themeSlice.actions;
  // Export reducer
  export const themeReducer =  themeSlice.reducer;