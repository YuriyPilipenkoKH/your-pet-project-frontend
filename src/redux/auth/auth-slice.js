import { createSlice } from '@reduxjs/toolkit';
import  authOperations  from './auth-operations';



const initialState = {
    user: { 
      name: null,
      email: null,
      imageURL: "",
      city: "",
      favorite: [],
      itemsFavorite: [], 
    },
    
    registrationSuccessful: false,
    isLoading: false,
    error: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: false,
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers:builder=> {
    builder
        // register
        .addCase(authOperations.register.pending, state => {
            state.isLoading = true;
            state.error = null;
            // state.isRefreshing = true;
        })

        .addCase(authOperations.register.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.registrationSuccessful = true;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.error = null;
        })
        .addCase(authOperations.register.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
        // login
        .addCase(authOperations.logIn.pending, state => {
            state.isLoading = true;
            state.error = null;
        })

        .addCase(authOperations.logIn.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload.user;
            state.token = action.payload.token;
            state.isLoggedIn = true;
            state.user.favorite = action.payload.user.favorite;
            state.isRefreshing = false;
        })
        .addCase(authOperations.logIn.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })

        //current
        .addCase(authOperations.fetchCurrentUser.pending, (state, action) => {
            state.isLoading = true;
            state.error = null;
            state.isRefreshing = true;
        })
        .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = action.payload;
            state.isRefreshing = false;
            state.isLoggedIn = true;
            state.error = null;
        })

        .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
            state.isLoading = false;
            state.isRefreshing = false;
            state.token = null;
            state.error = action.payload;
        })

        // logout
        .addCase(authOperations.logOut.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(authOperations.logOut.fulfilled, (state, action) => {
            state.isLoading = false;
            state.user = {};
            state.registrationSuccessful = false;
            state.token = null;
            state.isLoggedIn = false;
            state.user.favorite = [];
        })
        .addCase(authOperations.logOut.rejected, (state, action) => {
            state.isLoading = false;
            state.error = action.payload;
        })
      
        //fetchUpdateUser
        .addCase(authOperations.fetchUpdateUser.pending, state => {
            state.isLoading = true;
            state.error = null;
        })
        .addCase(
            authOperations.fetchUpdateUser.fulfilled,
            (state, { payload }) => {
              state.isLoading = false;
              state.registrationSuccessful = false;
              state.user = payload;
              state.error = null;
            }
        )
        .addCase(
            authOperations.fetchUpdateUser.rejected,
            (state, { payload }) => {
                state.isLoading = false;
                state.error = payload;
            }
        );
  },
});

export default authSlice.reducer;