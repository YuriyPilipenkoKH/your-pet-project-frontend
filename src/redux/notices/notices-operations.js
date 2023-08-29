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

const fetchAddNotice = createAsyncThunk(
    'notices/noticesAdd',
    async (data, thunkAPI) => {
        try {
            const response = await axios.post('/notices',  data );
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const fetchAllFavorite = createAsyncThunk(
    'notices/noticesAllFavorite',
    async (searchParams, thunkAPI) => {
        try {
            const { query, page=1 } = searchParams;
            const response = await axios.get(`/notices/favorite?NoticesSearch=${query}&page=${page}`);
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);
const fetchDeleteNotice = createAsyncThunk(
    'notices/noticesDelete',

    async (id, thunkAPI) => {
        try {
            const { data } = await axios.delete(`/notices/${id}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);



const fetchNoticesAddFavorite = createAsyncThunk(
    'notices/addFavorite',

    async (favoriteNotices, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/notices/${favoriteNotices}/addFavorite`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const fetchRemoveFavorite = createAsyncThunk(
    'notices/removeFavorite',

    async (favoriteNotices, thunkAPI) => {
        try {
            const { data } = await axios.patch(`/notices/${favoriteNotices}/removeFavorite`);
            // console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const fetchNoticesByCategory = createAsyncThunk(
    'notices/noticesAllByCategory',
    async (searchParams ,thunkAPI) => {
        // console.log('searchParams', searchParams)
        try {
            const { NoticesCategoriesNav, query, page=1 } = searchParams;
            const { data } = await axios.get(`/notices?NoticesCategoriesNav=${NoticesCategoriesNav}&NoticesSearch=${query}&page=${page}`);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const fetchUserNotices = createAsyncThunk(
    'notices/userNotices',
    async (searchParams, thunkAPI) => {
        try {
            const { query, page=1 } = searchParams;
            const { data } = await axios.get(`/notices/userNotices?NoticesSearch=${query}&page=${page}`)
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);


const operations = {
    fetchAllNotices,
    fetchNoticesByCategory,
    // fetchNoticeById,
    fetchAddNotice,
    fetchAllFavorite,
    fetchDeleteNotice,
    fetchNoticesAddFavorite,
    fetchRemoveFavorite,
    fetchUserNotices
};

export default operations;