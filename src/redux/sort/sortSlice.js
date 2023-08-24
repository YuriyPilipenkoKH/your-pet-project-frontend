import { createSlice } from "@reduxjs/toolkit";


export  const sortSlice = createSlice({

    name: 'sort',
    initialState: {
        activeIndex : 0,
        sell : true,
        lostFound : false,
        inGoodHands: false,
        favoriteAds: false,
        myAds: false,
    },
    reducers: {

      toggleSell:{
       reducer(state)  {
       state.activeIndex = 0 
       state.sell = true 
       state.lostFound = false 
       state.inGoodHands = false
       state.favoriteAds = false
       state.myAds = false
           
        }},

      toggleLostFound:{
       reducer(state)  {
       state.activeIndex = 1
       state.sell = false 
       state.lostFound = true 
       state.inGoodHands = false
       state.favoriteAds = false
       state.myAds = false
       
        }},

      toggleInGoodHands:{
       reducer(state)  {
       state.activeIndex = 2
       state.sell = false 
       state.lostFound = false 
       state.inGoodHands = true
       state.favoriteAds = false
       state.myAds = false
       
        }},

      toggleFavoriteAds:{
       reducer(state)  {
       state.activeIndex = 3
       state.sell = false 
       state.lostFound = false 
       state.inGoodHands = false
       state.favoriteAds = true
       state.myAds = false
       
        }},

      toggleMyAds:{
       reducer(state)  {
       state.activeIndex = 4
       state.sell = false 
       state.lostFound = false
       state.inGoodHands = false
       state.favoriteAds = false
       state.myAds = true
       
        }},
}
})

export const {toggleSell, toggleLostFound,  toggleInGoodHands,  toggleFavoriteAds, toggleMyAds }  = sortSlice.actions
export const sortReducer = sortSlice.reducer

