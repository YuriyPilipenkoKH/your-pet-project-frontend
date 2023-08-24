import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';

const fetchAllNotices = createAsyncThunk(
    'notices/noticesAll',
    async (_, thunkAPI) => {
        try {
            const { data } = await axios.get('/notices');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

// const fetchAddNotice = createAsyncThunk(
//     'notices/noticesAdd',
//     async (data, thunkAPI) => {
//         try {
//             const response = await axios.post('/notices',  data );
//             return response.data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.message);
//         }
//     }
// );

// const fetchAllFavorite = createAsyncThunk(
//     'notices/favoriteAll',
//     async (_, thunkAPI) => {
//         try {
//             const { data } = await axios.get('/notices/favorite');
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );


// const fetchNoticeById = createAsyncThunk(
//     'notices/noticesById',

//     async (notices, thunkAPI) => {
//         const { id } = notices;
//         try {
//             const { data } = await axios.get(`/notices/${id}`);
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );



// const fetchDeleteNotice = createAsyncThunk(
//     'notices/noticesDelete',

//     async (notices, thunkAPI) => {
//         const { id } = notices;
//         try {
//             const { data } = await axios.delete(`/notices/${id}`);
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );



// const fetchNoticesAddFavorite = createAsyncThunk(
//     'notices/addFavorite',

//     async (favoriteNotices, thunkAPI) => {
//         const { id, payload } = favoriteNotices;
//         try {
//             const { data } = await axios.patch(`/notices/${id}/addFavorite`, payload);
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );

// const fetchRemoveFavorite = createAsyncThunk(
//     'notices/removeFavorite',

//     async (favoriteNotices, thunkAPI) => {
//         const { id, payload } = favoriteNotices;
//         try {
//             const { data } = await axios.patch(`/notices/${id}/removeFavorite`, payload);
//             return data;
//         } catch (error) {
//             return thunkAPI.rejectWithValue(error.response.data);
//         }
//     }
// );


const operations = {
    fetchAllNotices,
    // fetchNoticeById,
    // fetchAddNotice,
    // fetchAllFavorite,
    // fetchDeleteNotice,
    // fetchNoticesAddFavorite,
    // fetchRemoveFavorite
};

export default operations;
