import { createSlice } from '@reduxjs/toolkit';
import petsOperations from './petsOperations';
const initialState = {
    listPets: [],
    loading: false,
    owner: {},
    error: null,
    reRender: false,
};
const petsSlice = createSlice({
    name: 'pets',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(petsOperations.getPet.pending, state => {
                state.loading = true;
                state.error = null;
                state.reRender = true;
            })
            .addCase(
                petsOperations.getPet.fulfilled,
                (state, { payload }) => {
                console.log('payload',payload)
                    state.loading = false;
                    state.listPets = payload.pets
                    state.owner = payload.owner
                    state.reRender = false;

                }
            )
            .addCase(
                petsOperations.getPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                    state.reRender = false;
                }
            )
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
