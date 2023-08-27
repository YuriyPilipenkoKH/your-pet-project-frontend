import { createSlice } from '@reduxjs/toolkit';
import petsOperations from './petsOperations';
const initialState = {
    listPets: [],
    loading: false,
    category: '',
    categoryIdx: null,
    error: null,
    item: {},
};
const petsSlice = createSlice({
    name: 'pets',
    initialState,

    reducers: {
        
        setCategory: (state, action) => {
            console.log('action',action)
            state.category = action.payload

        },
        setCategoryIdx: (state, action) => {
            console.log('action',action)
            state.categoryIdx = action.payload

        },
      },

    extraReducers: builder => {
        builder
        .addCase(petsOperations.addMySelfPet.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(petsOperations.addMySelfPet.fulfilled, (state, { payload }) => {
            state.loading = false;
            state.items.push(payload);
            state.user = payload;
          })
          .addCase(petsOperations.addMySelfPet.rejected, (state, { payload }) => {
            state.loading = false;
            state.error = payload;
          })
            .addCase(petsOperations.removeMyPet.pending, state => {
                state.loading = true;
            })
            .addCase(
                petsOperations.removeMyPet.fulfilled,
                (state, { payload }) => {
                    console.log(payload);
                    // store.loading = false;
                    // const index = store.list.findIndex(
                    //     item => item.id === payload
                    // );
                    // store.list.splice(index, 1);
                }
            )
            .addCase(
                petsOperations.removeMyPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                }
            );
    },
});

export const {setCategory, setCategoryIdx}  = petsSlice.actions
export default petsSlice.reducer;