import { createSlice } from '@reduxjs/toolkit';
import newsOperations from './newsOperations';
const initialState = {
    listNews: [],
};
const newsSlice = createSlice({
    name: 'news',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(
                newsOperations.fetchNews.fulfilled,
                (state, { payload }) => {
                    state.listNews = payload;
                }
            )
            .addCase(
                newsOperations.fetchNews.rejected,
                (state, { payload }) => {
                    state.error = payload;
                }
            );
    },
});
export default newsSlice.reducer;
