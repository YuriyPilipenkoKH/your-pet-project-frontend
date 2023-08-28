import { createSlice } from '@reduxjs/toolkit';
import noticesOperations from './notices-operations';

const initialState = {
    list: [],
    category: '',
    loading: false,
    error: null,
    item: {},
    owner: '',
    page: 1,
    totalPages: 1,
    keyword: '',
    reRender: false,
};

const noticesSlice = createSlice({
    name: 'notices',
    initialState,
    reducers: {
        setKeyword: (state, action) => {
            state.keyword = action.payload;
        },
        setAge: (state, action) => {
            // state.list.age = action.payload;
        },


    },
    extraReducers: builder => {
        builder
            .addCase(noticesOperations.fetchAllNotices.pending, store => {
                store.loading = true;
            })
            .addCase(
                noticesOperations.fetchAllNotices.fulfilled,
                (store, { payload }) => {
                      console.log(payload);
                    store.loading = false;
                    store.list = payload.notices
                    ;
                }
            )
            .addCase(
                noticesOperations.fetchAllNotices.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                }
            )
            .addCase(noticesOperations.fetchAllFavorite.pending, store => {
                store.loading = true;
            })
            .addCase(
                noticesOperations.fetchAllFavorite.fulfilled,
                (store, { payload }) => {
                      console.log('payload',payload);
                    store.loading = false;
                    store.list =  payload
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
            })
            .addCase(
                noticesOperations.fetchAddNotice.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                    console.log(payload);
                }
            )
            .addCase(
                noticesOperations.fetchAddNotice.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
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
                    console.log('payload',payload);
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
                store.reRender = true;
            })
            .addCase(
                noticesOperations.fetchUserNotices.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                    store.list = payload;
                    store.reRender = false;
                }
            )
            .addCase(
                noticesOperations.fetchUserNotices.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                    store.reRender = false;
                }
            )


            .addCase(noticesOperations.addMySelfPet.pending, store => {
                store.loading = true;
            })
            .addCase(
                noticesOperations.addMySelfPet.fulfilled,
                (store, { payload }) => {
                    store.loading = false;
                }
            )
            .addCase(
                noticesOperations.addMySelfPet.rejected,
                (store, { payload }) => {
                    console.log(12345)
                    store.loading = false;
                }
            )

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

            .addCase(noticesOperations.fetchDeleteNotice.pending, store => {
                store.loading = true;
                store.reRender = true
            })
            .addCase(
                noticesOperations.fetchDeleteNotice.fulfilled,
                (store, { payload }) => {
                    console.log(payload);
                    store.loading = false;
                    // const index = store.list.findIndex(
                    //     item => item.id === payload
                    // );
                    // store.list.splice(index, 1);
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
                    console.log('payload', payload);
                    store.loading = false;
                    store.list =  payload.notices
                    // store.category = payload.notices.category;
                    // store.page = Math.ceil(payload.length / 12);
                    // store.totalPages = payload.data.totalPages;
                    store.keyword = '';
                }
            )
            .addCase(
                noticesOperations.fetchNoticesByCategory.rejected,
                (store, { payload }) => {
                    store.loading = false;
                    store.error = payload;
                }
            );
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
export const {setAge}  = noticesSlice.actions
export default noticesSlice.reducer;
