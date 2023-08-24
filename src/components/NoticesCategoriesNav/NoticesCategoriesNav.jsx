import React from 'react'
import { RadioButton } from '../Button/Button'
import { NavWrap, NavWrapper } from '../../pages/pages.styled/NoticesPage.styled'
// import { iconFilter } from '../../images/icons'
import { BtnWrap } from './NoticesCategoriesNav.styled'

export default function NoticesCategoriesNav() {
  return (
    <>
      <NavWrapper >

      <BtnWrap>
        <RadioButton>sell</RadioButton>
        <RadioButton>lost/found</RadioButton>
        <RadioButton >in good hands</RadioButton>
      {/* <FavButton className='filround'> {iconFilter}</FavButton> */}
        {/* <RadioButton>favorite ads</RadioButton> */}
        {/* <RadioButton>my ads</RadioButton> */}
      </BtnWrap>
                 
      <NavWrap >
      </NavWrap>

      </NavWrapper>
    </>
  )
}
