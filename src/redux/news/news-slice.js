import { createSlice } from '@reduxjs/toolkit';
import newsOperations from './news-operations';

const initialState = {
    listNews: [],
    loading: false,
    totalPages: 1,
    page: 1,
    query: "",
    error: null,
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
            state.totalPages = payload.totalPages;
            state.page = Number(payload.page);
            state.loading = false;
            state.items = payload.news;
          })
          .addCase(newsOperations.fetchNews.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          });
    },
});

export default newsSlice.reducer;