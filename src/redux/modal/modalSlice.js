import { createSlice } from "@reduxjs/toolkit";


export  const modalSlice = createSlice({

    name: 'modal',
    initialState: {
     
        modalIsOpen: false,
        
    },
    reducers: {
        setModalOpen(state, action) {
        state.modalIsOpen = true
      },
        setModalClose(state, action) {
        state.modalIsOpen = false
      },

}
})

export const {setModalOpen, setModalClose}  = modalSlice.actions
export const modalReducer = modalSlice.reducer