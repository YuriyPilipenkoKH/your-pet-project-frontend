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



const fetchDeleteNotice = createAsyncThunk(
    'notices/noticesDelete',

    async (id, thunkAPI) => {
        // const { id } = notices;
        console.log(id)

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
            console.log(data);
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.response.data);
        }
    }
);

const fetchNoticesByCategory = createAsyncThunk(
    'notices/noticesAllByCategory',
    async ({searchParams} ,thunkAPI) => {
        console.log('searchParams', searchParams)
        try {
            const { NoticesCategoriesNav, query } = searchParams;
            console.log("NoticesCategoriesNav", NoticesCategoriesNav);
            console.log("query", query);
            const { data } = await axios.get(`/notices?NoticesCategoriesNav=${NoticesCategoriesNav}&NoticesSearch=${query}`)
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
    // fetchAllFavorite,
    fetchDeleteNotice,
    fetchNoticesAddFavorite,
    fetchRemoveFavorite
};

export default operations;