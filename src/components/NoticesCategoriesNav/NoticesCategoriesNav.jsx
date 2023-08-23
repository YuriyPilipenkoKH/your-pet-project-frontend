import React from 'react'
import { FavButton, RadioButton } from '../Button/Button'
import { NavWrap, NavWrapper } from '../../pages/pages.styled/NoticesPage.styled'
import { iconFilter } from '../../images/icons'
import { BtnWrap } from './NoticesCategoriesNav.styled'

export default function NoticesCategoriesNav() {
  return (
    <>
      <NavWrapper >
      <RadioButton>sell</RadioButton>
      <RadioButton>lost/found</RadioButton>
      <BtnWrap>
      <FavButton className='filround'> {iconFilter}</FavButton>
      </BtnWrap>
      
      </NavWrapper>
      <RadioButton >in good hands</RadioButton>
      
     
      <NavWrap >
      <RadioButton>favorite ads</RadioButton>
      <RadioButton>my ads</RadioButton>
      </NavWrap>
    </>
  )
}
