import React from 'react'
import { useDispatch} from "react-redux"
import { RadioButton } from '../Button/Button'
import {  NavWrapper } from '../../pages/pages.styled/NoticesPage.styled'
import { BtnWrap } from './NoticesCategoriesNav.styled'
import { useAuth } from 'hooks/useAuth'
import { toggleInGoodHands, toggleLostFound, toggleSell, toggleFavoriteAds, toggleMyAds } from 'redux/sort/sortSlice'


export default function NoticesCategoriesNav() {
  const { isLoggedIn} = useAuth()
  const dispatch = useDispatch()

  return (
    <>
      <NavWrapper >

      <BtnWrap>
        <RadioButton  onClick={()=>  dispatch(toggleSell())}>sell</RadioButton>
        <RadioButton  onClick={()=>  dispatch(toggleLostFound())}>lost/found</RadioButton>
        <RadioButton onClick={()=>  dispatch(toggleInGoodHands())}>in good hands</RadioButton>
  
        {isLoggedIn && <RadioButton  onClick={()=>  dispatch(toggleFavoriteAds())}>favorite ads</RadioButton>}
        {isLoggedIn &&  <RadioButton  onClick={()=>  dispatch(toggleMyAds())}>my ads</RadioButton>}
       
      </BtnWrap>
                 
      {/* <NavWrap > */}
      {/* </NavWrap> */}

      </NavWrapper>
    </>
  )
}
