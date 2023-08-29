import { createSlice } from '@reduxjs/toolkit';
import sponsorsOperations from './sponsorsOperations';
const initialState = {
    listSponsors: [],
    loading: false,
};
const sponsorsSlice = createSlice({
    name: 'sponsors',
    initialState,
    extraReducers: builder => {
        builder
        .addCase(sponsorsOperations.fetchSponsors.pending, (state) => {
            state.loading = true;
          })
          .addCase(sponsorsOperations.fetchSponsors.fulfilled, (state, { payload }) => {
            state.listSponsors = payload;
            state.loading = false;
          })
          .addCase(sponsorsOperations.fetchSponsors.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          });
    },
});
export default sponsorsSlice.reducer;