import { createSlice } from "@reduxjs/toolkit";


export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     
        filterNotices: '',
        filterNews: '',
        filterByAgeIdx: null,
        filterByGenderIdx: null,
    },
    reducers: {
        setFilterNotices(state, action) {
        state.filterNotices = action.payload
      },
      setFilterNews(state, action) {
        state.filterNews = action.payload
      },
      setFilterByAgeIdx(state, action) {
        state.filterByAgeIdx = action.payload
      },
      setFilterByGenderIdx(state, action) {
        state.filterByGenderIdx = action.payload
      },
}
})

export const {setFilterNotices, setFilterNews, setFilterByAgeIdx, setFilterByGenderIdx}  = filterSlice.actions
export const filterReducer = filterSlice.reducer