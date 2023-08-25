import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = '';
    },
};

const register = createAsyncThunk(
    'auth/register',
    async (credentials, thunkAPI) => {
        try {
            const { data } = await axios.post(
                '/users/auth/register',
                credentials
            );
            // console.log(data);
            token.set(data.token);
            // Notify.info('Something went wrong. Please, try again later.');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
    try {
        const { data } = await axios.post('/users/auth/login', credentials);
        token.set(data.token);
        return data;
    } catch (error) {
        //   Notify.info('Something went wrong. Please, try again later.');
        return thunkAPI.rejectWithValue(error.message);
    }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/current',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            // console.log('Токена нет, уходим из fetchCurrentUser');
            return thunkAPI.rejectWithValue();
        }

        token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/current');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        token.unset();
    } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
    }
});





// const fetchUser = createAsyncThunk("user/fetch", async (_, thunkAPI) => {
//     try {
//         await axios.get('/user/fetch');
//         token.unset();
//     } catch (error) {
//         return thunkAPI.rejectWithValue(error.message);
//     }
// });


const operations = {
    register,
    logIn,
    fetchCurrentUser,
    logOut,
    // fetchUser
    // fetchUpdateAvatar
    // fetchDeleteUserPet
    // fetchDeleteUserPet
};

export default operations;
