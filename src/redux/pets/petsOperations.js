import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';


const getPet = createAsyncThunk('pets', async (_, thunkAPI) => {
    try {
        const { data } = await axios.get('/pet');
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const removeMyPet = createAsyncThunk('pets/deletePet', async (id, thunkAPI) => {
    try {
        const { data } = await axios.delete(`/pet/${id}`);
        return data;
    } catch (error) {
        return thunkAPI.rejectWithValue(error.response.data);
    }
});

const addMySelfPet = createAsyncThunk(
    'pet/addPet',
    async (dataPet, thunkAPI) => {
        console.log('dataPet', dataPet);
        try {
            const { data } = await axios.post(`/pet`, dataPet);
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
