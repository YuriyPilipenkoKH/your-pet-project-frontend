import { createSlice } from "@reduxjs/toolkit";


export  const filterSlice = createSlice({

    name: 'filter',
    initialState: {
     
        filterNotices: '',
        filterNews: '',
        filterByAgeIdx: null,
        filterByGender: '',
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
      setFilterByGender(state, action) {
        state.filterByGender = action.payload
      },
}
})

export const {setFilterNotices, setFilterNews, setFilterByAgeIdx, setFilterByGender}  = filterSlice.actions
export const filterReducer = filterSlice.reducer

