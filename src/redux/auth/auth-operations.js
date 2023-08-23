import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://your-pet-shw3.onrender.com';

// Utility to add JWT
const setAuthHeader = (token )=> {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  };
  
  // Utility to remove JWT
  const clearAuthHeader = () => {
    axios.defaults.headers.common.Authorization = '';
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
            setAuthHeader(data.token);
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
        setAuthHeader(data.token);
        return data;
    } catch (error) {
        //   Notify.info('Something went wrong. Please, try again later.');
        return thunkAPI.rejectWithValue(error.message);
    }
});

const fetchCurrentUser = createAsyncThunk(
    'auth/update',
    async (_, thunkAPI) => {
        const state = thunkAPI.getState();
        const persistedToken = state.auth.token;

        if (persistedToken === null) {
            console.log('Токена нет, уходим из fetchCurrentUser');
            return thunkAPI.rejectWithValue();
        }

        // token.set(persistedToken);
        try {
            const { data } = await axios.get('/users/update');
            return data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
    try {
        await axios.post('/users/logout');
        clearAuthHeader();
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
