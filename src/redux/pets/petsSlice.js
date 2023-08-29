import { createSlice } from '@reduxjs/toolkit';
import petsOperations from './petsOperations';
const initialState = {
    listPets: [],
    loading: false,
    owner: {},
    error: null,
    reRender: false,
    message: '',
};
const petsSlice = createSlice({
    name: 'pets',
    initialState,
    extraReducers: builder => {
        builder
            .addCase(petsOperations.getPet.pending, state => {
                state.loading = true;
                state.error = null;
            })
            .addCase(
                petsOperations.getPet.fulfilled,
                (state, { payload }) => {
                console.log('payload',payload)
                    state.loading = false;
                    state.listPets = payload.pets
                    state.owner = payload.owner

                }
            )
            .addCase(
                petsOperations.getPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                }
            )
            .addCase(petsOperations.addMySelfPet.pending, state => {
                state.loading = true;
                state.error = null;
                state.reRender = true;
            })
            .addCase(
                petsOperations.addMySelfPet.fulfilled,
                (state, { _ }) => {
                    state.loading = false;
                    state.reRender = false;
                }
            )
            .addCase(
                petsOperations.addMySelfPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                    state.reRender = false;
                }
            )
            .addCase(petsOperations.removeMyPet.pending, state => {
                state.loading = true;
                state.reRender = true;
            })
            .addCase(
                petsOperations.removeMyPet.fulfilled,
                (state, { payload }) => {
                    console.log(payload);
                    state.message = payload.message
                    state.reRender = false;
                }
            )
            .addCase(
                petsOperations.removeMyPet.rejected,
                (state, { payload }) => {
                    state.loading = false;
                    state.error = payload;
                    state.reRender = false;
                }
            );
    },
});

export const { setCategory, setCategoryIdx } = petsSlice.actions;
export default petsSlice.reducer;
