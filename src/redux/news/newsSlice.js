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
        .addCase(newsOperations.fetchNews.pending, (state) => {
            state.loading = true;
          })
          .addCase(newsOperations.fetchNews.fulfilled, (state, { payload }) => {
            console.log(payload);
            state.listNews = payload;
          })
          .addCase(newsOperations.fetchNews.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          });
    },
});
export default newsSlice.reducer;