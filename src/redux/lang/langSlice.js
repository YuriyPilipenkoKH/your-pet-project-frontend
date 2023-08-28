import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    lang: 'english',
    
  };
  const langSlice = createSlice({
    name: 'lang',
    initialState,
    reducers: {
        
      toggleLang: (state, action) => {
       
        if(state.lang === 'english'){
            state.lang = 'ukrainian'
        }
        else if(state.lang === 'ukrainian'){
            state.lang = 'english'
        }
      },
    },
  });
  export const { toggleLang } = langSlice.actions;
  // Export reducer
  export const langReducer =  langSlice.reducer;