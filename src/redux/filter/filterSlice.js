import { createSlice } from "@reduxjs/toolkit";


export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     
        filterNotices: '',
        filterNews: '',
    },
    reducers: {
        setFilterNotices(state, action) {
        state.filterNotices = action.payload
      },
      setFilterNews(state, action) {
        state.filterNews = action.payload
      },
}
})

export const {setFilterNotices, setFilterNews}  = filterSlice.actions
export const filterReducer = filterSlice.reducer