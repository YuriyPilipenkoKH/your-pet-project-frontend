import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lang: 'eng',
    
  };
  const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        
      toggleLang: (state, action) => {
       
        if(state.lang === 'eng'){
            state.lang = 'ukr'
        }
        else if(state.lang === 'ukr'){
            state.lang = 'eng'
        }
      },
    },
  });
  export const { toggleLang } = langSlice.actions;
  // Export reducer
  export const langReducer =  langSlice.reducer;