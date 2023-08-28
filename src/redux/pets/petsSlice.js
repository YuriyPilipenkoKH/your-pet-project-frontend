import { createSlice } from '@reduxjs/toolkit';
import petsOperations from './petsOperations';
const initialState = {
    listPets: [],
    loading: false,
    category: '',
    error: null,
};
const petsSlice = createSlice({
    name: 'pets',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(petsOperations.addMySelfPet.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                petsOperations.addMySelfPet.fulfilled,
                (state, { _ }) => {
                    state.loading = false;
                }
            )
            .addCase(
                petsOperations.addMySelfPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                }
            )
            .addCase(petsOperations.removeMyPet.pending, state => {
                state.loading = true;
            })
            .addCase(
                petsOperations.removeMyPet.fulfilled,
                (state, { payload }) => {
                    console.log(payload);
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

export const { setCategory, setCategoryIdx } = petsSlice.actions;
export default petsSlice.reducer;
