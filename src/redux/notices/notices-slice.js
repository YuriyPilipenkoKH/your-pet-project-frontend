import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './notices-operations';

const initialState = {
    list: [],
    category: '',
    loading: false,
    error: null,
    item: {},

    // owner: {},
    owner: "",
    page: 1,
    keyword: '',
    reRender: false,
    totalPages: 0,
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
    },
    extraReducers: builder => {
        builder
            .addCase(noticesOperations.fetchAllFavorite.pending, store => {
                store.loading = true;
            })
            .addCase(
                noticesOperations.fetchAllFavorite.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                    store.list = payload.notices;
                    store.totalPages = payload.totalPages;
                }
            )
            .addCase(
                noticesOperations.fetchAllFavorite.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                }
            )
            .addCase(noticesOperations.fetchAddNotice.pending, store => {
                store.loading = true;
                store.reRender = true;
            })
            .addCase(
                noticesOperations.fetchAddNotice.fulfilled,
                (store, { payload }) => {


                    



                    store.loading = false;
                    store.reRender = false;

                }
            )
            .addCase(
                noticesOperations.fetchAddNotice.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchNoticesAddFavorite.pending,
                store => {
                    store.loading = true;
                    store.reRender = true;
                    store.item = {};
                }
            )
            .addCase(
                noticesOperations.fetchNoticesAddFavorite.fulfilled,
                (store, { payload }) => {


                    console.log(payload.owner);

                    console.log('payload', payload);



                    store.loading = false;
                    store.owner = payload.owner;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchNoticesAddFavorite.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                    store.reRender = false;
                }
            )
            .addCase(noticesOperations.fetchRemoveFavorite.pending, store => {
                store.loading = true;
                store.item = {};
                store.reRender = true;
            })
            .addCase(
                noticesOperations.fetchRemoveFavorite.fulfilled,
                (store, { payload }) => {
                    console.log(payload.owner);
                    store.loading = false;
                    store.owner = payload.owner;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchRemoveFavorite.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                    store.reRender = false;
                }
            )
            .addCase(noticesOperations.fetchUserNotices.pending, store => {
                store.loading = true;
                store.item = {};
            })
            .addCase(
                noticesOperations.fetchUserNotices.fulfilled,
                (store, { payload }) => {
                    
                    store.loading = false;
                    store.list = payload.notices;
                    store.totalPages = payload.totalPages;
                }
            )
            .addCase(
                noticesOperations.fetchUserNotices.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                }
            )
            .addCase(noticesOperations.fetchDeleteNotice.pending, store => {
                store.loading = true;
                store.reRender = true;
            })
            .addCase(
                noticesOperations.fetchDeleteNotice.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchDeleteNotice.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchNoticesByCategory.pending,
                store => {
                    store.loading = true;
                    store.itemsFavorite = [];
                }
            )
            .addCase(
                noticesOperations.fetchNoticesByCategory.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                    store.list = payload.notices;
                    store.keyword = '';
                    store.totalPages = payload.totalPages;
                }
            )
            .addCase(
                noticesOperations.fetchNoticesByCategory.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                }
            );
    },
});

export const { setAge } = noticesSlice.actions;
export default noticesSlice.reducer;
