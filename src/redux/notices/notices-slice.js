import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './notices-operations';


const initialState = {
    list: [],
    category: '',
    loading: false,
    error: null,
    item: {},
    owner: {},
    page: 1,
    totalPages: 1,
    keyword: '',
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
              .addCase(noticesOperations.fetchAllNotices.pending, (store) => {
                store.loading = true;
              })
             .addCase(noticesOperations.fetchAllNotices.fulfilled, (store, { payload }) => {
            //   console.log(payload);
                store.loading = false;
                store.list = payload;
              })
              .addCase(noticesOperations.fetchAllNotices.rejected, (store, { payload }) => {
                store.loading = false;
                store.error = payload;
              })

            // .addCase(noticesOperations.fetchAddNotice.pending, store => {
            //     store.loading = true;
            // })
            // .addCase(
            //     noticesOperations.fetchAddNotice.fulfilled,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.items.push(payload);
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchAddNotice.rejected,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.error = payload;
            //     }
            // )

            // .addCase(
            //     noticesOperations.fetchNoticesAddFavorite.pending,
            //     store => {
            //         store.loading = true;
            //         store.item = {};
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchNoticesAddFavorite.fulfilled,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.item = payload;
            //         store.owner = payload.owner;
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchNoticesAddFavorite.rejected,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.error = payload;
            //     }
            // )

            // .addCase(noticesOperations.fetchNoticeById.pending, (store) => {
            //   store.loading = true;
            //   store.item = {};
            // })
            // .addCase(noticesOperations.fetchNoticeById.fulfilled, (store, { payload }) => {
            //   store.loading = false;
            //   store.item = payload;
            //   store.owner = payload.owner;
            // })
            // .addCase(noticesOperations.fetchNoticeById.rejected, (store, { payload }) => {
            //   store.loading = false;
            //   store.error = payload;
            // })

            // .addCase(noticesOperations.fetchDeleteNotice.pending, store => {
            //     store.loading = true;
            // })
            // .addCase(
            //     noticesOperations.fetchDeleteNotice.fulfilled,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         const index = store.items.findIndex(
            //             item => item.id === payload
            //         );
            //         store.items.splice(index, 1);
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchDeleteNotice.rejected,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.error = payload;
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchNoticesByCategory.pending,
            //     store => {
            //         store.loading = true;
            //         store.items = [];
            //         store.itemsFavorite = [];
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchNoticesByCategory.fulfilled,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.items = [...payload.data.notices];
            //         store.category = payload.category;
            //         store.page = Number(payload.data.page);
            //         store.totalPages = payload.data.totalPages;
            //         store.keyword = '';
            //     }
            // )
            // .addCase(
            //     noticesOperations.fetchNoticesByCategory.rejected,
            //     (store, { payload }) => {
            //         store.loading = false;
            //         store.error = payload;
                // }
            // )
            // .addCase(noticesOperations.fetchNoticesByOwn.pending, store => {
            //     store.loading = true;
            //     store.items = [];
            //     store.category = '';
            // })
            // .addCase(fetchNoticesByOwn.fulfilled, (store, { payload }) => {
            //     store.loading = false;
            //     store.items = [...payload.notices];
            //     store.page = Number(payload.page);
            //     store.totalPages = payload.totalPages;
            // })
            // .addCase(fetchNoticesByOwn.rejected, (store, { payload }) => {
            //     store.loading = false;
            //     store.error = payload.notices;
            // });
    },
});

// export default noticesSlice.reducer;
// export const { setKeyword } = noticesSlice.actions;

export default noticesSlice.reducer;