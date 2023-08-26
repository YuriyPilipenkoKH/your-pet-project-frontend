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
    pets: [{}],
    registrationSuccessful: false,
    isLoading: false,
    error: null,
    token: null,
    isLoggedIn: false,
    isRefreshing: true,
  };

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    // ... other reducers

  },
  extraReducers:builder=> {
    builder
    // register
    .addCase(authOperations.register.pending,(state)=>{
      state.isLoading = true;
        state.error = null;
        // state.isRefreshing = true;
    })
      

    .addCase(authOperations.register.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.user = action.payload.user;
      state.registrationSuccessful = true;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      state.error = null
      // state.isRefreshing =false;
    })
    .addCase(authOperations.register.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // state.isRefreshing =false;
    })
    // login
    .addCase(authOperations.logIn.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      // state.isRefreshing = true;
    })

    .addCase(authOperations.logIn.fulfilled,(state, action)=>{
      
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
      // state.isRefreshing =false;
    })
  
    //current
    .addCase(authOperations.fetchCurrentUser.pending, (state, action) => {
      state.isLoading = true;
      state.error = null;
      // state.isRefreshing = true;

    })
    .addCase(authOperations.fetchCurrentUser.fulfilled, (state, action) => {
      // console.log(action);
      state.isLoading = false;
      state.user = action.payload;
           
      state.isLoggedIn = true;
      state.error = null
      // state.isRefreshing =false;
      
    })
    
    .addCase(authOperations.fetchCurrentUser.rejected, (state, action) => {
      state.isLoading = false;
      state.token = null;
      state.error = action.payload;
      // state.isRefreshing =false;
    })

    // logout
    .addCase(authOperations.logOut.pending, (state) => {
      state.isLoading = true;
      state.error = null;
      // state.isRefreshing = true;
      
    })
    .addCase(authOperations.logOut.fulfilled,(state, action)=>{
      state.isLoading = false;
      state.user = {};
      state.registrationSuccessful = false;
      state.token = null;
      state.isLoggedIn = false;
      state.user.favorite = [];
      state.isRefreshing = true;

      
    })
    .addCase(authOperations.logOut.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      // state.isRefreshing = false;
    })
    // fetchUser

    // .addCase(authOperations.fetchUser.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(authOperations.fetchUser.fulfilled, (state, { payload }) => {
    //   const { user, pets } = payload;
    //   state.isLoading = false;
    //   state.user = user;
    //   state.pets = pets;
    //   state.error = null;
    // })
    // .addCase(authOperations.fetchUser.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // })

    // fetchUpdateUser
    .addCase(authOperations.fetchUpdateUser.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    })
    .addCase(authOperations.fetchUpdateUser.fulfilled, (state, { payload }) => {
      console.log("payload", payload);
      const { user } = payload;
      state.isLoading = false;
      state.registrationSuccessful = false;
      state.user = user;
      state.error = null;
    })
    .addCase(authOperations.fetchUpdateUser.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    })

    //fetchUpdateAvatar
    // .addCase(authOperations.fetchUpdateAvatar.pending, (state) => {
    //   state.isLoading = true;
    //   state.error = null;
    // })
    // .addCase(authOperations.fetchUpdateAvatar.fulfilled, (state, { payload }) => {
    //   const { user } = payload;
    //   state.isLoading = false;
    //   state.registrationSuccessful = false;
    //   state.user = user;
    //   state.error = null;
    // })
    // .addCase(authOperations.fetchUpdateAvatar.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // })
    // .addCase(authOperations.fetchDeleteUserPet.pending, (state) => {
    //   state.isLoading = true;
    // })

    //fetchDeleteUserPet
    // .addCase(authOperations.fetchDeleteUserPet.fulfilled, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.registrationSuccessful = false;
    //   const index = state.pets.findIndex((pet) => pet._id === payload);
    //   state.pets.splice(index, 1);
    // })
    // .addCase(authOperations.fetchDeleteUserPet.rejected, (state, { payload }) => {
    //   state.isLoading = false;
    //   state.error = payload;
    // });
    
    
  },
});

export default authSlice.reducer;