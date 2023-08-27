import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';
const addMySelfPet = createAsyncThunk(
    'pets/addPet',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/pet');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const removeMyPet = createAsyncThunk(
    'pets/deletePet',
    async (id, thunkAPI) => {
        // const { id } = pet;
        console.log(id)
        try {
            const { data } = await axios.delete(`/pet/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const operations = {
    addMySelfPet,
    removeMyPet
};
export default operations;