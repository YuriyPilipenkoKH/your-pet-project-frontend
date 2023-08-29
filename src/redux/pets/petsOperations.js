import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';


const getPet = createAsyncThunk('pets', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/pets');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const removeMyPet = createAsyncThunk('pets/deletePet', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/pets/${id}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const addMySelfPet = createAsyncThunk(
    'pets/addPet',
    async (dataPet, thunkAPI) => {
        try {
            const { data } = await axios.post(`/pets`, dataPet);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);
const operations = {
    addMySelfPet,
    removeMyPet,
    getPet,
};
export default operations;
