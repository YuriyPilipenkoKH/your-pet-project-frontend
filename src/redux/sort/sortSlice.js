import { createSlice } from '@reduxjs/toolkit';

export const sortSlice = createSlice({
    name: 'sort',
    initialState: {
        activeIndex: 0,
    },
    reducers: {
        toggleSell: {
            reducer(state) {
                state.activeIndex = 0;
            },
        },

        toggleLostFound: {
            reducer(state) {
                state.activeIndex = 1;
            },
        },

        toggleInGoodHands: {
            reducer(state) {
                state.activeIndex = 2;
            },
        },

        toggleFavoriteAds: {
            reducer(state) {
                state.activeIndex = 3;
            },
        },

        toggleMyAds: {
            reducer(state) {
                state.activeIndex = 4;
            },
        },
    },
});

export const {
    toggleSell,
    toggleLostFound,
    toggleInGoodHands,
    toggleFavoriteAds,
    toggleMyAds,
} = sortSlice.actions;
export const sortReducer = sortSlice.reducer;
