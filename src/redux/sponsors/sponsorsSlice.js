import { createSlice } from '@reduxjs/toolkit';
import sponsorsOperations from './sponsorsOperations';
const initialState = {
    listSponsors: [],
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
            console.log(payload);
            state.listSponsors = payload;
          })
          .addCase(sponsorsOperations.fetchSponsors.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          });
    },
});
export default sponsorsSlice.reducer;